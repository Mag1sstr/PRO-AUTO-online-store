export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CATALOG: "/catalog",
  PRODUCT: (id: number) => `${ROUTES.CATALOG}/${id}`,
};
