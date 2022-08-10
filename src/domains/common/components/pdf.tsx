import React, { Fragment, useEffect } from 'react';
import { Project } from 'domains/shapeDiver/models';
import jsPDF from 'jspdf';
import { imgPage1Investor, imgPage2Investor, imgPage3Investor, logoSmall, logoSmallWhite } from 'assets';
import _ from 'lodash';
import { Densities, Density, ProjectBudget } from 'domains/core/models';
import { MapGeo } from 'domains/core/components';
import html2canvas from 'html2canvas';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { setImagePNG, setLoadingMap } from 'domains/shapeDiver/slice';
import { NumberFormatState } from 'react-number-format';
import JSZip from 'jszip';
import { useTranslation } from 'react-i18next';


interface OwnProps {
  exportPdf: boolean;
  project: ProjectBudget;
  parentCallback: any;
}

interface StateProps {
  imagePNG: any;
  loadingMap: boolean;
}

interface DispatchProps {
  setImagePNG: typeof setImagePNG;
  setLoadingMap: typeof setLoadingMap;
}

type Props = StateProps & DispatchProps & OwnProps;
const Pdf = (props: Props) => {
  const { exportPdf, project, parentCallback, imagePNG, setLoadingMap } = props;
  const { t } = useTranslation();
  let datesArray: Date[] = [];

  const getDensityType = (value: number) => {
    const den = _.find(Densities, (x: Density) => x.value === value);
    return den;
  }

  const exportMapFunc = React.useRef<any>(null);





  useEffect(() => {
    

    if (exportPdf) {

      project?.spends!.map((spend) => {
        datesArray.push(spend.date!);
      })

      const doc = new jsPDF('portrait', 'px', 'a4');

      const unzipFile = async (zip: any, lastImage: boolean, x: number, y: number, w: number, h: number) => {
        const jsDecodeZip = new JSZip();
        const unzipped = await jsDecodeZip.loadAsync(zip);
        const content = await unzipped.file(unzipped.files['undefined'].name)?.async("base64").then(function (fileData) {
          let img = new Image();
          img.src = "data:image/png" + ";base64," + fileData;
          img.onload = () => {
            doc.addImage(
              img,
              'PNG',
              x,
              y,
              w,
              h
            );
            if (lastImage) {
              doc.save("a4.pdf");
            }

          }
        })
      }

      const generatePage = (iteration: number, lastIteration: number) => {
        const maxDate = new Date(datesArray.sort().reverse()[0]);
        const figureNumber = (iteration + 1) * 4;
        if (iteration > 0) {
          doc.addPage();
        }
        doc.addImage(
          logoSmall,
          'PNG',
          doc.internal.pageSize.width - 90,
          20,
          50,
          22
        );
        doc.setFontSize(9);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(t('username'), 20, 35);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("| " + project?.email!, 60, 35);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(t('project_name'), 20, 45);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("| " + project.name!, 70, 45);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(t('date_pictures_updated'), 20, 65);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("| " + maxDate.toDateString(), 95, 65);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(t('number_pictures'), 20, 75);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("| " + String(project.spends?.length), 115, 75);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(t('budget_project'), 20, 95);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("| " + project.name!, 70, 95);
        // doc.setFillColor(237, 235, 235);
        if (project.spends!.length >= figureNumber - 3) {
          doc.rect(20, 120, doc.internal.pageSize.width / 2 - 30, doc.internal.pageSize.height / 3, 'S');
          doc.text(t('picture') + " No. " + (figureNumber - 3), 20 + doc.internal.pageSize.width / 2 - 30, 120 + doc.internal.pageSize.height / 3 + 10, {
            align: "right"
          });
          if (project.spends![figureNumber - 4].file !== null) {
            unzipFile(project.spends![figureNumber - 4].file, lastIteration === figureNumber - 4 ? true : false, 20 + (doc.internal.pageSize.width / 2 - 30)/4, 120 + (doc.internal.pageSize.height / 3)/4, 100, 100);
          }

        }

        if (project.spends!.length >= figureNumber - 2) {
          doc.rect(doc.internal.pageSize.width / 2, 120, doc.internal.pageSize.width / 2 - 30, doc.internal.pageSize.height / 3, 'S');
          doc.text(t('picture') + " No. " + (figureNumber - 2), doc.internal.pageSize.width / 2 + doc.internal.pageSize.width / 2 - 30, 120 + doc.internal.pageSize.height / 3 + 10, {
            align: "right"
          });
          if (project.spends![figureNumber - 3].file !== null) {
            unzipFile(project.spends![figureNumber - 3].file, lastIteration === figureNumber - 3 ? true : false, (doc.internal.pageSize.width / 2) + (doc.internal.pageSize.width / 2 - 30)/4, 120 + (doc.internal.pageSize.height / 3)/4, 100, 100);
          }
        }

        if (project.spends!.length >= figureNumber - 1) {
          doc.rect(20, 360, doc.internal.pageSize.width / 2 - 30, doc.internal.pageSize.height / 3, 'S');
          doc.text(t('picture') + " No. " + (figureNumber - 1), 20 + doc.internal.pageSize.width / 2 - 30, 360 + doc.internal.pageSize.height / 3 + 10, {
            align: "right"
          });
          if (project.spends![figureNumber - 2].file !== null) {
            unzipFile(project.spends![figureNumber - 2].file, lastIteration === figureNumber - 2 ? true : false, 20 + (doc.internal.pageSize.width / 2 - 30)/4, 360 +  (doc.internal.pageSize.height / 3)/4, 100, 100);
          }
        }

        if (project.spends!.length >= figureNumber) {
          doc.rect(doc.internal.pageSize.width / 2, 360, doc.internal.pageSize.width / 2 - 30, doc.internal.pageSize.height / 3, 'S');
          doc.text(t('picture') + " No. " + figureNumber, doc.internal.pageSize.width / 2 + doc.internal.pageSize.width / 2 - 30, 360 + doc.internal.pageSize.height / 3 + 10, {
            align: "right"
          });
          if (project.spends![figureNumber - 1].file !== null) {
            unzipFile(project.spends![figureNumber - 1].file, lastIteration === figureNumber - 1 ? true : false , (doc.internal.pageSize.width / 2) + (doc.internal.pageSize.width / 2 - 30)/4, 360 + (doc.internal.pageSize.height / 3)/4, 100, 100);
          }
        }
      }
      // setLoadingMap(false);
      const generateImagesPdf = () => {
        // const maxDate =
        // new Date(Math.max(...project?.spends!.map(e => new Date(String(e.date)))));
        let lastIndex = 0;
        const indexLastFile = project.spends?.map((spend, idx) => {
          if(spend.file !== null){
            lastIndex = idx;
          }
        })
        const spendsNumber = project?.spends!.length;
        const iterations = spendsNumber / 4;
        for (let i = 0; i < iterations; i++) {
          generatePage(i, lastIndex)
        }

        const pageCount = doc.getNumberOfPages();
        for (let i = 0; i < pageCount; i++) {
          doc.setPage(i);
          let pageCurrent = doc.getCurrentPageInfo().pageNumber; //Current Page
          doc.text(t('page') + ' ' + pageCurrent + ' of ' + pageCount, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 20, {
            align: "center"
          });
        }
        // doc.save("a4.pdf");
        parentCallback(false);
      }

      generateImagesPdf();
    }
  }, [exportPdf])

  return (
    <Fragment>
      <div style={{ visibility: "hidden", overflow: "hidden", height: 1000 }}>
        {/* <MapGeo location={project?.location?.city} exportMapFunc={exportMapFunc} exportMap={true} /> */}
      </div>
    </Fragment>
  )
}

const container = compose<Props, OwnProps>(
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      imagePNG: state.domains.shapediver.imagePNG,
      loadingMap: state.domains.shapediver.loadingMap
    }),
    {
      setImagePNG,
      setLoadingMap
    }
  )
)(Pdf);

export default container;