import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import { LocationSimple, SearchParams } from 'domains/core/models';
import { AdvancedOptions, ModelData, Project, ShapeDiverOptions } from 'domains/shapeDiver/models';
import { get, post, deletes } from 'app/api';
import { AxiosResponse } from 'axios';

export interface ShapeDiverState {
  area: number;
  location: LocationSimple | undefined;
  terrain: number | undefined;
  options: ShapeDiverOptions | undefined;
  facadeDirection: number;
  roomType: number;
  floorSelectionOptions: string[];
  floorSelection: number;
  densityGeneral: string;
  modelData: ModelData;
  importModel: string;
  expandAdvanced: Object;
  searchClick: Boolean;
  projects: Project[];
  currentProject: Project | undefined;
  saveSuccess: boolean;
  nameProject: string;
  loading: boolean;
  idProject: string | undefined;
}

const initialState: ShapeDiverState = {
  area: 1,
  location: undefined,
  terrain: 1, // Rect
  options: undefined,
  facadeDirection: 0,
  roomType: 2,
  floorSelectionOptions: [],
  floorSelection: 0,
  densityGeneral: 'urban',
  modelData: {
    floorAreaRatio: 0,
    landUserRatio: 0,
    totalGrossFloorArea: 0,
    totalHousingUnits: 0,
    averageBedroomPerDwelling: 0,
    averageInhabitantPerDwelling: 0,
    dwellingsDensity: 0,
    greenSpaceDensity: 0,
    greenSpacePerInhabitant: 0,
    plotRatio: 0,
    roadDensity: 0,
    totalGrossLeasableArea: 0,
    totalLandArea: 0,
    studios: 0,
    largeStudios: 0,
    oneBedroom: 0,
    twoBedroom: 0,
    threeBedroom: 0,
    fourBedroom: 0,
    groundFloorFreeSpace: 0,
    multipleFloorFreeSpace: 0,
    mostHeightBuilding: 0,
    landUserRatioNet: 0,
    landUserRatioGross: 0,
    floorAreaRatioNet: 0,
    floorAreaRatioGross: 0,
    populationDensity: 0,
    roadDensitym2: 0,
    greenSpaceDensitym2: 0,
    studiosm2: 0,
    studiosPorc: 0,
    largeStudiosm2: 0,
    largeStudiosPorc: 0,
    oneBedroomm2: 0,
    oneBedroomPorc: 0,
    twoBedroomm2: 0,
    twoBedroomPorc: 0,
    threeBedroomm2: 0,
    threeBedroomPorc: 0,
    fourBedroomm2: 0,
    fourBedroomPorc: 0,
    oneToTwoPorc: 0,
    threeToFourPorc: 0
  },
  importModel: '',
  expandAdvanced: { height: '100vh' },
  searchClick: false,
  projects: [],
  currentProject: undefined,
  saveSuccess: false,
  nameProject: '',
  loading: false,
  idProject: undefined
};

export const shapeDiverSlice = createSlice({
  name: 'shapediver',
  initialState,
  reducers: {
    setInitialParams: (state, action: PayloadAction<SearchParams>) => {
      state.area = action.payload.area;
      state.location = action.payload.location;
      state.densityGeneral = action.payload.density.type;
    },
    setTerrain: (state, action: PayloadAction<number | undefined>) => {
      state.terrain = action.payload;
    },
    setDensity: (state, action: PayloadAction<number>) => {
      state.location!.density = action.payload;
    },
    setLocation: (state, action: PayloadAction<LocationSimple>) => {
      state.location = action.payload;
    },
    setUnitsNumberType: (state, action: PayloadAction<number>) => {
      // state.location!.unitsNumberType = action.payload;
      state.location!.typologies = action.payload;
    },
    setAdvancedOptions: (state, action: PayloadAction<AdvancedOptions>) => {
      state.location!.maxPriFloors = action.payload.maxPriFloors;
      state.location!.maxSecFloors = action.payload.maxSecFloors;
      state.location!.streetFloors = action.payload.streetFloors;
      state.location!.typologies = action.payload.typologies;
      state.location!.emptySpaceSelection = action.payload.emptySpaceSelection;
      state.location!.undefinedTower = action.payload.undefinedTower;
      state.location!.streetDensity = action.payload.streetDensity;
      state.location!.islandSpacings = action.payload.islandSpacings;
      state.location!.axisSelection = action.payload.axisSelection;
      state.location!.floorsAlignment = action.payload.floorsAlignment;
      state.location!.unitsOrganization = action.payload.unitsOrganization;
    },
    setWindow: (state, action: PayloadAction<number>) => {
      state.location!.windowPercentage = action.payload;
    },
    setFacadeDirection: (state, action: PayloadAction<number>) => {
      state.facadeDirection = action.payload;
    },
    setFlatSize: (state, action: PayloadAction<number>) => {
      state.location!.flatSize = action.payload;
    },
    setOptions: (state, action: PayloadAction<ShapeDiverOptions>) => {
      state.options = action.payload;
    },
    setRegen: (state) => {
      state.location!.regen = (state.location!.regen + 1) % state.options!.regen.length;
    },
    setRoomType: (state, action: PayloadAction<number>) => {
      state.roomType = action.payload;
    },
    setFloorSelectionOptions: (state, action: PayloadAction<string[]>) => {
      state.floorSelectionOptions = action.payload;
    },
    setFloorSelection: (state, action: PayloadAction<number>) => {
      state.floorSelection = action.payload;
    },
    setModelData: (state, action: PayloadAction<ModelData>) => {
      state.modelData = action.payload;
    },
    setImportModel: (state, action: PayloadAction<string>) => {
      state.importModel = action.payload;
    },
    setExpandAdvanced: (state, action: PayloadAction<Object>) => {
      state.expandAdvanced = action.payload;
    },
    setSearchClick: (state, action: PayloadAction<Boolean>) => {
      state.searchClick = action.payload;
    },
    setSaveSuccess: (state, action: PayloadAction<boolean>) => {
      state.saveSuccess = action.payload;
    },
    setLoadProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.currentProject = action.payload;
    },
    setNameProject: (state, action: PayloadAction<string>) => {
      state.nameProject = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setDensityGeneral: (state, action: PayloadAction<number>) => {
      state.location!.densityGeneral = action.payload;
    },
    setIdProject: (state, action: PayloadAction<string>) => {
      state.idProject = action.payload;
    },
    setBalconyType: (state, action: PayloadAction<number>) => {
      state.location!.balconyType = action.payload;
    },
    setUndefinedTower: (state, action: PayloadAction<number>) => {
      state.location!.undefinedTower = action.payload;
    }
  },
});

export const {
  setTerrain,
  setOptions,
  setInitialParams,
  setDensity,
  setWindow,
  setAdvancedOptions,
  setFacadeDirection,
  setRegen,
  setFlatSize,
  setUnitsNumberType,
  setRoomType,
  setFloorSelectionOptions,
  setFloorSelection,
  setModelData,
  setImportModel,
  setExpandAdvanced,
  setSearchClick,
  setSaveSuccess,
  setLoadProjects,
  setCurrentProject,
  setNameProject,
  setLoadingStatus,
  setDensityGeneral,
  setIdProject,
  setBalconyType,
  setUndefinedTower
} = shapeDiverSlice.actions;

export const getArea = (state: RootState) => state.domains.shapediver.area;
export const getProjectData = (state: RootState) => ({
  area: state.domains.shapediver.area,
  location: state.domains.shapediver.location,
  terrain: state.domains.shapediver.terrain,
  facadeDirection: state.domains.shapediver.facadeDirection,
  roomType: state.domains.shapediver.roomType,
  floorSelection: state.domains.shapediver.floorSelection,
  modelData: state.domains.shapediver.modelData
});

export default shapeDiverSlice.reducer;

export const saveProject = (project: Project): AppThunk => dispatch => {
  post('/SaveProject', { data: project }).then((data: AxiosResponse) => {
    dispatch(setSaveSuccess(data.data === "Success" ? true : false))
  });
};

export const loadProjectsByUsername = (username: string): AppThunk => dispatch => {
  dispatch(setLoadingStatus(true));
  get(`/LoadProjectsByUserName?username=${username}`).then((data: AxiosResponse) => {
    dispatch(setLoadingStatus(false));
    dispatch(setLoadProjects(data.data));
  });
};

export const loadProjectById = (id: string): AppThunk => dispatch => {
  get(`/LoadProjectById?id=${id}`).then((data: AxiosResponse) => {
    dispatch(setCurrentProject(data.data))
  });
};

export const deleteProjectById = (id: string, username: string): AppThunk => dispatch => {
  deletes(`/DeleteProjectById?id=${id}&username=${username}`)
    .then((data: AxiosResponse) => {
      dispatch(setLoadProjects(data.data));
    });
};

export const editProject = (id: string, project: Project): AppThunk => dispatch => {
  post(`/EditProjectById?id=${id}`, { data: project }).then((data: AxiosResponse) => {
    dispatch(setCurrentProject(data.data))
  });
};
