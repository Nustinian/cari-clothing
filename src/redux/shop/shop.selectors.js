import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).map((collectionKey) => collections[collectionKey])
);

export const selectCollection = (collectionUrlParameter) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParameter]
  );
