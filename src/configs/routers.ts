import DASHBOARD from '../pages/dashboard.jsx';
import PRODUCTS from '../pages/products.jsx';
import ORDERS from '../pages/orders.jsx';
import USERS from '../pages/users.jsx';
import ANALYTICS from '../pages/analytics.jsx';
import SETTINGS from '../pages/settings.jsx';
import LOGIN from '../pages/login.jsx';
import PRODUCT_ADD from '../pages/product-add.jsx';
import PRODUCT_EDIT from '../pages/product-edit.jsx';
import PRODUCT_DETAIL from '../pages/product-detail.jsx';
import ORDER_DETAIL from '../pages/order-detail.jsx';
export const routers = [{
  id: "dashboard",
  component: DASHBOARD
}, {
  id: "products",
  component: PRODUCTS
}, {
  id: "orders",
  component: ORDERS
}, {
  id: "users",
  component: USERS
}, {
  id: "analytics",
  component: ANALYTICS
}, {
  id: "settings",
  component: SETTINGS
}, {
  id: "login",
  component: LOGIN
}, {
  id: "product-add",
  component: PRODUCT_ADD
}, {
  id: "product-edit",
  component: PRODUCT_EDIT
}, {
  id: "product-detail",
  component: PRODUCT_DETAIL
}, {
  id: "order-detail",
  component: ORDER_DETAIL
}]