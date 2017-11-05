import * as sagas from './sagas';

export const initSagas = (sagaMidleware) => {
  Object.values(sagas).forEach(sagaMidleware.run.bind(sagaMidleware));
};
