module.exports = {
  customTranslation: {
    actions: {
      new: "Создать",
      edit: "Изменить",
      show: "Показать",
      delete: "Удалить",
      bulkDelete: "Удалить все",
      list: "Список",
    },
    buttons: {
      save: "Сохранить",
      filter: "Фильтр",
      applyChanges: "Применить изменения",
      resetFilter: "Сбросить",
      confirmRemovalMany: "Принимаете ли вы удаление {{count}} записей",
      confirmRemovalMany_plural: "Принимаете ли вы удаление {{count}} записей",
      logout: "Выйти",
      seeTheDocumentation: "Посмотрите: <1>документацию</1>",
      createFirstRecord: "Создайте первую запись",
    },
    properties: {
      length: "Длина",
    },
    labels: {
      loginWelcome: "",
      articles: "Артиклы/Статьи (Articles)",
      users: "Профили (User)",
      storage: "Инвентарь (Storage)",
      categories: "Категории (Category)",
      cases: "Кейсы (Case)",
      modules: "Модули (Module)",
      promocodes: "Промокоды (Promocode)",
      items: "Шмотки (Item)",
      balance_history: "История балансов (BalanceHistory)",
      bonus_history: "История бонусов (BonusHistory)",
      insider_prices: "Цены в Insider (InsiderPrices)",
      navigation: "Навигация",
      pages: "Страница",
      selectedRecords: "Выбрано ({{selected}})",
      filters: "Фильтры",
      adminVersion: "Версия админки: {{version}}",
      appVersion: "Версия приложения: {{version}}",
    },
    messages: {
      loginWelcome: "",
      successfullyBulkDeleted: "Успешно удалено {{count}} полей",
      successfullyBulkDeleted_plural: "Успешно удалено {{count}} полей",
      successfullyDeleted: "Успешно удалено поле",
      successfullyUpdated: "Успешно изменено поле",
      thereWereValidationErrors:
        "Имеются ошибки валидации - check them out below",
      successfullyCreated: "Успешно создано поле",
      bulkDeleteError:
        "Имеются ошибки при удалении, проверьте консоль сервера для подробной информации",
      errorFetchingRecords:
        "Произошла ошибка при извлечении записи, проверьте консоль сервера",
      errorFetchingRecord:
        "Произошла ошибка при извлечении записи, проверьте консоль сервера",
      noRecordsSelected: "У вас не выбрано записей.",
      theseRecordsWillBeRemoved: "Следующие записи будут удалены",
      theseRecordsWillBeRemoved_plural: "Следующие записи будут удалены",
      pickSomeFirstToRemove:
        "Чтобы удалить записи, вы должны сначала выбрать их",
      error404Resource: "Запись с заданным id: {{resourceId}} не найден",
      error404Action:
        "Запись с заданным id: {{resourceId}} не имеет: {{actionName}}",
      error404Record:
        "Запись с заданным id: {{resourceId}} не имеет место для записи: {{recordId}}",
      seeConsoleForMore:
        "Посмотрите консоль чтобы получить больше информации...",
      noActionComponent:
        "You have to implement action component for your Action",
      noRecordsInResource: "В данном разделе нет полей",
      confirmDelete: "Вы точно хотите удалить это поле?",
    },
  },
};
