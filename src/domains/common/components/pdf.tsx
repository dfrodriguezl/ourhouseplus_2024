import React, { Fragment, useEffect } from 'react';
import { Project } from 'domains/shapeDiver/models';
import jsPDF from 'jspdf';
import { imgPage1Investor, imgPage2Investor, imgPage3Investor } from 'assets';
import _ from 'lodash';
import { Densities, Density } from 'domains/core/models';
import { MapGeo } from 'domains/core/components';
import html2canvas from 'html2canvas';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { setImagePNG, setLoadingMap } from 'domains/shapeDiver/slice';


interface OwnProps {
  exportPdf: boolean;
  project: Project;
  parentCallback: any;
  nameProject: string;
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
  const { exportPdf, project, parentCallback, nameProject, imagePNG, setLoadingMap } = props;

  const getDensityType = (value: number) => {
    const den = _.find(Densities, (x: Density) => x.value === value);
    return den;
  }

  const exportMapFunc = React.useRef<any>(null);

  useEffect(() => {
    if (exportPdf && imagePNG) {
      setLoadingMap(false);
      const generateInvestorPdf = () => {
        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF('landscape', 'px', 'a4');


        doc.addImage(imgPage1Investor, 'PNG', 0, 0, doc.internal.pageSize.width * 0.6, doc.internal.pageSize.height);

        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("PROJECT", doc.internal.pageSize.width - 15, 30, {
          align: "right"
        });

        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(nameProject, doc.internal.pageSize.width - 15, 40, {
          align: "right"
        });
        doc.setFontSize(8);
        doc.setTextColor("#707070");
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("collective housing", doc.internal.pageSize.width - 15, 50, {
          align: "right"
        });
        doc.setFontSize(8);
        doc.setTextColor("#707070");
        doc.text(project.location.city + ".", doc.internal.pageSize.width - 15, 60, {
          align: "right"
        });
        doc.setFillColor(237, 235, 235);
        doc.rect(290, 100, doc.internal.pageSize.width - 290, 280, 'F');

        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("INVESTOR TEASER", doc.internal.pageSize.width - 15, 420, {
          align: "right"
        });
        doc.setFontSize(7);
        doc.setTextColor("#707070");
        doc.text("Info project for investor", doc.internal.pageSize.width - 15, 430, {
          align: "right"
        });
        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text((project.area === 0 ? project.modelData?.totalLandArea.toLocaleString() : (project.area! * 10000).toLocaleString()) + " m2", doc.internal.pageSize.width - 320, 150);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("area terrain", doc.internal.pageSize.width - 320, 157);
        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(project.modelData?.totalHousingUnits!.toString()!, doc.internal.pageSize.width - 320, 180);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("units housing", doc.internal.pageSize.width - 320, 187);
        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(project.modelData?.dwellingsDensity!.toString()! + " u/ht", doc.internal.pageSize.width - 320, 210);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("housing density", doc.internal.pageSize.width - 320, 217);
        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(project.modelData?.totalGrossFloorArea!.toLocaleString().toString()! + " m2", doc.internal.pageSize.width - 320, 240);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("total built area", doc.internal.pageSize.width - 320, 247);
        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(getDensityType(project.location.densityGeneral! ? project.location.densityGeneral! : project.location.density)?.label!, doc.internal.pageSize.width - 320, 270);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("housing type", doc.internal.pageSize.width - 320, 277);

        const imgMapa = exportMapFunc.current();

        doc.addImage(
          imgMapa,
          'PNG',
          305,
          120,
          350,
          200
        )
        doc.circle(480, 220, 100);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("terrain address", doc.internal.pageSize.width - 15, 140, {
          align: "right"
        });
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("4", doc.internal.pageSize.width - 320, 330);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("transport nodes (400 m)", doc.internal.pageSize.width - 200, 330, {
          align: "right"
        });
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("300 m", doc.internal.pageSize.width - 320, 340);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("dist. university", doc.internal.pageSize.width - 200, 340, {
          align: "right"
        });
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("1500 m", doc.internal.pageSize.width - 320, 350);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("dist. hospital", doc.internal.pageSize.width - 200, 350, {
          align: "right"
        });
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("45 yrs", doc.internal.pageSize.width - 320, 360);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("avg age", doc.internal.pageSize.width - 200, 360, {
          align: "right"
        });
        doc.addPage();
        doc.addImage(imgPage2Investor, 'PNG', doc.internal.pageSize.width * 0.6, 0, doc.internal.pageSize.width * 0.4, doc.internal.pageSize.height);
        doc.setFontSize(9);
        doc.setTextColor("#707070");
        doc.text("PROJECT", doc.internal.pageSize.width - 15, 30, {
          align: "right"
        });
        doc.setFontSize(12);
        doc.setTextColor("#403F3F");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(nameProject, doc.internal.pageSize.width - 15, 40, {
          align: "right"
        });
        doc.setFontSize(8);
        doc.setTextColor("#707070");
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("collective housing", doc.internal.pageSize.width - 15, 50, {
          align: "right"
        });
        doc.setFontSize(8);
        doc.setTextColor("#707070");
        doc.text(project.location.city + ".", doc.internal.pageSize.width - 15, 60, {
          align: "right"
        });
        doc.setFontSize(12);
        doc.setTextColor("#FFFFFF");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("Project volume", doc.internal.pageSize.width - 15, 420, {
          align: "right"
        });
        doc.setFontSize(7);
        doc.setTextColor("#FFFFFF");
        doc.text("View of project*", doc.internal.pageSize.width - 15, 430, {
          align: "right"
        });
        doc.setFontSize(14);
        doc.setTextColor("#BD775E");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("Plot info", 50, 30);
        doc.setTextColor("#707070");
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.setFontSize(12);
        doc.text("Area & costs", 50, 40);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.setTextColor("#000000");
        doc.text((project.area === 0 ? project.modelData?.totalLandArea.toLocaleString() : (project.area! * 10000).toLocaleString()) + " m2", 50, 60);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("gross land area", 120, 60);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text((project.area === 0 ? project.modelData?.totalLandArea.toLocaleString() : (project.area! * 10000).toLocaleString()) + " m2", 50, 70);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("usable land plot area", 120, 70);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("USD 3 millions", 50, 100);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Plot price", 50, 110);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("USD 200,000", 50, 120);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Cost construction project", 50, 130);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("USD 1,500 m2", 50, 140);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Cost construction project", 50, 150);
        doc.setFontSize(14);
        doc.setTextColor("#BD775E");
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text("Project", 50, 200);
        doc.setTextColor("#707070");
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.setFontSize(12);
        doc.text("Units detail", 50, 210);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.setTextColor("#000000");
        doc.text((project.modelData?.totalGrossFloorArea)?.toLocaleString() + " m2", 50, 230);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Gross floor area (built area)", 120, 230);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text((project.modelData?.totalHousingUnits!)?.toLocaleString(), 50, 250);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Total units built", 120, 250);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text((project.modelData?.twoBedroom!)?.toLocaleString() + " (" + (project.modelData?.twoBedroomPorc)?.toLocaleString() + "%)", 50, 270);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Nbr. two bedroom (90 m2)", 120, 270);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text((project.modelData?.threeBedroom!)?.toLocaleString() + " (" + (project.modelData?.threeBedroomPorc)?.toLocaleString() + "%)", 50, 280);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Nbr. three bedroom (108 m2)", 120, 280);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text((project.modelData?.fourBedroom!)?.toLocaleString() + " (" + (project.modelData?.fourBedroomPorc)?.toLocaleString() + "%)", 50, 290);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Nbr. three bedroom loft (108 m2)", 120, 290);
        doc.setFont(doc.getFont().fontName, "normal", "bold");
        doc.text(getDensityType(project.location.densityGeneral! ? project.location.densityGeneral! : project.location.density)?.label!, 50, 400);
        doc.setFont(doc.getFont().fontName, "normal", "normal");
        doc.text("Housing type", 50, 410);
        html2canvas(document.querySelector("#sdv-container-viewport-canvas")! as HTMLElement).then(canvas => {

          doc.addImage(
            canvas.toDataURL("image/png"),
            'PNG',
            270,
            80,
            doc.internal.pageSize.width - 290,
            250
          )
          doc.addPage();
          doc.setFontSize(9);
          doc.setTextColor("#707070");
          doc.text("PROJECT", doc.internal.pageSize.width - 15, 30, {
            align: "right"
          });
          doc.setFontSize(12);
          doc.setTextColor("#403F3F");
          doc.setFont(doc.getFont().fontName, "normal", "bold");
          doc.text(nameProject, doc.internal.pageSize.width - 15, 40, {
            align: "right"
          });
          doc.setFontSize(8);
          doc.setTextColor("#707070");
          doc.setFont(doc.getFont().fontName, "normal", "normal");
          doc.text("collective housing", doc.internal.pageSize.width - 15, 50, {
            align: "right"
          });
          doc.setTextColor("#707070");
          doc.text(project.location.city + ".", doc.internal.pageSize.width - 15, 60, {
            align: "right"
          });
          doc.setFontSize(12);
          doc.setTextColor("#000000");
          doc.setFont(doc.getFont().fontName, "normal", "bold");
          doc.text(getDensityType(project.location.densityGeneral! ? project.location.densityGeneral! : project.location.density)?.label!, 50, 400);
          doc.setFont(doc.getFont().fontName, "normal", "normal");
          doc.text("Housing type", 50, 410);
          doc.addImage(imgPage3Investor, 'PNG', doc.internal.pageSize.width * 0.6, 80, 240, 300);
          doc.setFontSize(14);
          doc.setTextColor("#BD775E");
          doc.setFont(doc.getFont().fontName, "normal", "bold");
          doc.text("Project Value", 50, 30);
          doc.setTextColor("#707070");
          doc.setFont(doc.getFont().fontName, "normal", "normal");
          doc.setFontSize(12);
          doc.text("Brief add value", 50, 40);
          doc.setFont(doc.getFont().fontName, "normal", "bold");
          doc.setTextColor("#000000");
          doc.text("1.xxxxxxxxxxxxxxx", 50, 60);
          doc.setFont(doc.getFont().fontName, "normal", "normal");
          doc.text("xxxxxxxxxxx", 200, 60);
          doc.setFont(doc.getFont().fontName, "normal", "bold");
          doc.text("2.xxxxxxxxxxxxxxx", 50, 70);
          doc.setFont(doc.getFont().fontName, "normal", "normal");
          doc.text("xxxxxxxxxxx", 200, 70);
          doc.setFont(doc.getFont().fontName, "normal", "bold");
          doc.text("3.xxxxxxxxxxxxxxx", 50, 80);
          doc.setFont(doc.getFont().fontName, "normal", "normal");
          doc.text("xxxxxxxxxxx", 200, 80);

          if (imagePNG) {
            let image = new Image();
            image.src = imagePNG;
            doc.addImage(
              image,
              'PNG',
              50,
              125,
              300,
              200
            );
            doc.save("a4.pdf");
            parentCallback(false);
            setImagePNG(undefined);
          }

        });

      }
      generateInvestorPdf();
    }
  }, [exportPdf, imagePNG])

  return (
    <Fragment>
      <div style={{ visibility: "hidden", overflow: "hidden", height: 1000, width: 1000 }}>
        <MapGeo location={project?.location?.city} exportMapFunc={exportMapFunc} exportMap={true} />
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