export const data = {
  routes: [
    {
      path: "/",
      name: "Home",
      children: [],
    },
    {
      path: "/solutions",
      name: "Solutions",
      children: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/about",
          name: "About",
        },
      ],
    },
    {
      path: "/products",
      name: "Products",
      children: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/about",
          name: "About",
        },
      ],
    },
    {
      path: "/ecosystem",
      name: "Ecosystem",
      children: [],
    },
    {
      path: "/publications",
      name: "Publications",
      children: [],
    },
  ],
};
