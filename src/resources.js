const Articles = require("./models/article"),
  BalanceHistory = require("./models/balanceHistory"),
  BonusHistory = require("./models/bonusHistory"),
  Case = require("./models/case"),
  Category = require("./models/category"),
  InsiderPrices = require("./models/insiderPrices"),
  Item = require("./models/item"),
  Module = require("./models/module"),
  Promocode = require("./models/promocode"),
  Storage = require("./models/storage"),
  User = require("./models/user"),
  Admins = require("./models/admins"),
  bcrypt = require("bcrypt");

const canModify = ({ currentAdmin }) =>
  currentAdmin && currentAdmin.role === "admin";
const isAdmin = ({ currentAdmin }) => currentAdmin.role === "admin";

const contentNavigation = {
  name: "Главная",
  icon: "Home",
};

const HistoryNavigation = {
  name: "История",
  icon: "Accessibility",
};

const CaseNavigation = {
  name: "Кейсы",
  icon: "Accessibility",
};
const ProfileNavigation = {
  name: "Профили",
  icon: "Security",
};

module.exports = [
  {
    resource: Articles,
    options: {
      navigation: contentNavigation,
    },
  },
  {
    resource: User,
    options: {
      navigation: ProfileNavigation,
      actions: {
        new: {
          isAccessible: isAdmin,
        },
        edit: { isAccessible: canModify },
        delete: { isAccessible: canModify },
      },
    },
  },
  { resource: Storage, options: { navigation: contentNavigation } },
  { resource: Category, options: { navigation: CaseNavigation } },
  { resource: Case, options: { navigation: CaseNavigation } },
  { resource: Module, options: { navigation: contentNavigation } },
  { resource: Promocode, options: { navigation: contentNavigation } },
  { resource: Item, options: { navigation: contentNavigation } },
  { resource: BalanceHistory, options: { navigation: HistoryNavigation } },
  { resource: BonusHistory, options: { navigation: HistoryNavigation } },
  { resource: InsiderPrices, options: { navigation: HistoryNavigation } },
  {
    resource: Admins,
    options: {
      navigation: ProfileNavigation,
      properties: {
        encryptedPassword: {
          isVisible: false,
        },
        password: {
          type: "string",
          isVisible: {
            list: false,
            edit: true,
            filter: false,
            show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            if (request.payload.password) {
              request.payload = {
                ...request.payload,
                encryptedPassword: await bcrypt.hash(
                  request.payload.password,
                  10
                ),
                password: undefined,
              };
            }
            return request;
          },
        },
      },
    },
  },
];
