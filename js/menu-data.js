/* =========================================================
   MOVK — данные меню (единственный источник для menu.html и главной)

   Как редактировать:
   - name    — название блюда;
   - weight  — выход так, как он указан на movk.by (единицы не подтверждены);
   - price   — цена в BYN, число;
   - desc    — описание; пустая строка, если описания нет (не придумывать);
   - photo   — файл в assets/menu/ или null (тогда показывается карточка с логотипом);
   - check   — необязательная пометка для проверки: на сайт не выводится,
               попадает в код страницы как комментарий <!-- ПРОВЕРИТЬ: ... -->.
   Сверено с https://movk.by/menu 26.11.2026.
   ========================================================= */
window.MOVK_MENU = {
  currency: "BYN",

  categories: [
    { id: "zavtraki", title: "Завтраки" },
    { id: "zakuski",  title: "Закуски" },
    { id: "salaty",   title: "Салаты" },
    { id: "supy",     title: "Супы" },
    { id: "garniry",  title: "Гарниры" },
    { id: "goryachee", title: "Горячее" },
    { id: "draniki",  title: "Драники" },
    { id: "pasta",    title: "Паста и соба" },
    { id: "pizza",    title: "Пицца и бургеры" },
    { id: "deserty",  title: "Десерты" }
  ],

  items: [
    /* ---------- Завтраки ---------- */
    { id: "syrniki", cat: "zavtraki", name: "Сырники", weight: "170/70/5", price: 16,
      desc: "Нежные сырники из творога с ванилью, золотистой корочкой, сметаной и ягодным соусом.",
      photo: "syrniki.jpg" },
    { id: "omlet", cat: "zavtraki", name: "Омлет с ветчиной и сыром", weight: "200/50/40", price: 20,
      desc: "Воздушный омлет с ветчиной и сыром чеддер, томатами черри и тостами.",
      photo: "omlet.jpg" },
    { id: "sandwich-chicken", cat: "zavtraki", name: "Сэндвич с куриным филе", weight: "260", price: 15,
      desc: "Сэндвич с сочным куриным филе, салатом, томатами и пикантным соусом.",
      photo: "sandwich-chicken.jpg" },
    { id: "sandwich-pepperoni", cat: "zavtraki", name: "Сэндвич с пепперони", weight: "225", price: 15,
      desc: "Сэндвич с пепперони, сливочным сыром и пряным томатным соусом.",
      photo: "sandwich-pepperoni.jpg" },

    /* ---------- Закуски ---------- */
    { id: "eggplant", cat: "zakuski", name: "Пряный баклажан", weight: "120/40", price: 15,
      desc: "Хрустящие баклажаны в глазури с чили и соевым соусом — пряное сочетание сладости и остроты.",
      photo: "eggplant.jpg",
      check: "фото: на снимке банка, баклажаны почти не видны" },
    { id: "beef-tartare", cat: "zakuski", name: "Тартар из говядины", weight: "155/40", price: 27,
      desc: "Рубленая говядина с каперсами, корнишонами, луком-шалотом, перепелиным желтком и брускеттой.",
      photo: "beef-tartare.jpg" },
    { id: "cheese-sticks", cat: "zakuski", name: "Сырные палочки", weight: "150/50", price: 22,
      desc: "Хрустящие палочки из моцареллы с соусом спайси.",
      photo: "cheese-sticks.jpg" },
    { id: "shrimp-skewer", cat: "zakuski", name: "Креветки на шпажке с соусом спайси", weight: "100/45/30", price: 32,
      desc: "Обжаренные креветки на шпажке с пикантным соусом спайси.",
      photo: "shrimp-skewer.jpg" },

    /* ---------- Салаты ---------- */
    { id: "caesar-chicken", cat: "salaty", name: "А-ля Цезарь с куриным филе", weight: "200", price: 26,
      desc: "Куриное филе, салат романо, томаты черри, гренки, пармезан и фирменная заправка.",
      photo: "caesar-chicken.jpg" },
    { id: "caesar-salmon", cat: "salaty", name: "А-ля Цезарь с лососем", weight: "185", price: 32,
      desc: "Салат романо со слабосоленым лососем, крутонами, перепелиными яйцами, пармезаном и соусом.",
      photo: "caesar-salmon.jpg" },
    { id: "vegetable-feta", cat: "salaty", name: "Овощной с брынзой", weight: "165/20", price: 22,
      desc: "Огурцы, томаты, сладкий перец, красный лук, брынза и соус песто.",
      photo: "vegetable-feta.jpg" },
    { id: "caesar-shrimp", cat: "salaty", name: "Цезарь с креветками", weight: "195", price: 32,
      desc: "Салат с креветками, овощами, зеленью, вялеными томатами и легким соусом.",
      photo: "caesar-shrimp.jpg",
      check: "состав: название «Цезарь» не полностью раскрыто описанием" },
    { id: "shrimp-passionfruit", cat: "salaty", name: "С креветками и соусом маракуйя", weight: "190", price: 32,
      desc: "Обжаренные креветки и свежие овощи с заправкой из маракуйи.",
      photo: "shrimp-passionfruit.jpg" },

    /* ---------- Супы ---------- */
    { id: "pea-veloute", cat: "supy", name: "Велюте из зеленого горошка", weight: "350/40", price: 20,
      desc: "Нежный крем-суп из зеленого горошка со сливками, шалотом, мятой, мускатным орехом и гренками.",
      photo: "pea-veloute.jpg" },
    { id: "borscht", cat: "supy", name: "Борщ", weight: "350/110", price: 15,
      desc: "Красный борщ с фасолью по белорусской рецептуре, подается со сметаной, зеленью и хлебом.",
      photo: "borscht.jpg" },
    { id: "chicken-broth", cat: "supy", name: "Бульон куриный", weight: "350/40", price: 15,
      desc: "Куриный бульон с овощами, домашней лапшой и зеленью.",
      photo: "chicken-broth.jpg" },

    /* ---------- Гарниры ---------- */
    { id: "fries", cat: "garniry", name: "Картофель фри", weight: "130", price: 10,
      desc: "Хрустящий картофель фри.",
      photo: null },
    { id: "jasmine-rice", cat: "garniry", name: "Рис жасмин", weight: "150", price: 8,
      desc: "Рис жасмин на гарнир.",
      photo: null },

    /* ---------- Горячее ---------- */
    { id: "beef-cheeks", cat: "goryachee", name: "Щеки говяжьи с картофельным пюре", weight: "150/150", price: 32,
      desc: "Томленые говяжьи щеки с ароматными кореньями и луком, подаются со сливочным картофельным пюре.",
      photo: "beef-cheeks.jpg" },
    { id: "pork-ribs", cat: "goryachee", name: "Ребра свиные с бейби картофелем", weight: "270/150/100", price: 36,
      desc: "Свиные ребра в глазури BBQ с запеченным молодым картофелем, чесноком и розмарином.",
      photo: "pork-ribs.jpg" },
    { id: "salmon-parchment", cat: "goryachee", name: "Лосось в пергаменте", weight: "160/150", price: 46,
      desc: "Филе лосося, приготовленное в пергаменте с овощами, лимоном и розмарином.",
      photo: "salmon-parchment.jpg" },
    { id: "chicken-schnitzel", cat: "goryachee", name: "Шницель куриный с картофельным пюре", weight: "150/150/20", price: 24,
      desc: "Куриный шницель с хрустящей корочкой и нежным картофельным пюре.",
      photo: "chicken-schnitzel.jpg" },

    /* ---------- Драники ---------- */
    { id: "draniki-machanka", cat: "draniki", name: "Драники с мачанкой", weight: "150/180/40", price: 30,
      desc: "Картофельные драники с мачанкой из куриного филе, шампиньонов и лука в соусе.",
      photo: "draniki-machanka.jpg" },
    { id: "draniki-salmon", cat: "draniki", name: "Драники с лососем и творожным муссом", weight: "150/160", price: 36,
      desc: "Хрустящие драники со слабосоленым лососем и нежным творожным муссом.",
      photo: "draniki-salmon.jpg" },
    { id: "draniki-sour-cream", cat: "draniki", name: "Драники со сметаной", weight: "180/140", price: 18,
      desc: "Горячие картофельные драники с густой сметаной.",
      photo: "draniki-sour-cream.jpg" },

    /* ---------- Паста и соба ---------- */
    { id: "soba-shrimp", cat: "pasta", name: "Соба в азиатском стиле с креветками", weight: "310/20", price: 34,
      desc: "Гречневая лапша соба с креветками в насыщенном бульоне на основе соевого соуса.",
      photo: "soba-shrimp.jpg" },
    { id: "farfalle-shrimp", cat: "pasta", name: "Фарфалле с креветками", weight: "350", price: 30,
      desc: "Паста фарфалле с креветками в бархатистом томатном соусе.",
      photo: "farfalle-shrimp.jpg" },
    { id: "carbonara", cat: "pasta", name: "Карбонара", weight: "310", price: 30,
      desc: "Паста карбонара с хрустящим беконом и выдержанным сыром.",
      photo: null },

    /* ---------- Пицца и бургеры ---------- */
    { id: "pizza-mushroom", cat: "pizza", name: "Пицца «Грибное лукошко»", weight: "550", price: 32,
      desc: "Пицца с опятами, шампиньонами, луком, куриной ветчиной и моцареллой. Тесто пышное или тонкое, соус сливочный или чесночный.",
      photo: "pizza-mushroom.jpg",
      check: "варианты теста и соуса" },
    { id: "pizza-village", cat: "pizza", name: "Пицца «По-деревенски»", weight: "550", price: 32,
      desc: "Пицца с беконом, запеченной свининой, маринованными огурчиками, моцареллой и фирменным соусом.",
      photo: "pizza-village.jpg" },
    { id: "pizza-cheese-chicken", cat: "pizza", name: "Пицца «Чиз Чикен»", weight: "550", price: 32,
      desc: "Пицца с куриным филе, томатами, моцареллой и сырным соусом.",
      photo: "pizza-cheese-chicken.jpg",
      check: "фото: на movk.by файл назван gribnoe-lukoshko.jpg, на снимке маринованный лук и перец — соответствие блюду" },
    { id: "pizza-pepperoni", cat: "pizza", name: "Пицца «Пепперони»", weight: "510", price: 32,
      desc: "Пицца с пепперони, моцареллой и томатным соусом.",
      photo: "pizza-pepperoni.jpg" },
    { id: "chef-burger", cat: "pizza", name: "Шеф-бургер", weight: "370/100/50", price: 32,
      desc: "Бургер на булочке с кунжутом в глазури BBQ с курицей, овощами и моцареллой, подается с картофелем фри и томатным соусом.",
      photo: null },

    /* ---------- Десерты ---------- */
    { id: "basque-cheesecake", cat: "deserty", name: "Чизкейк баскский", weight: "150/50", price: 18,
      desc: "Запеченный сливочный чизкейк с нежной серединой и карамелизированной корочкой.",
      photo: "basque-cheesecake.jpg" },
    { id: "fondant", cat: "deserty", name: "Фондан", weight: "90/75", price: 20,
      desc: "Теплый шоколадный фондан с жидкой начинкой и шариком пломбира.",
      photo: "fondant.jpg" },
    { id: "panna-cotta", cat: "deserty", name: "Медовая панакотта с ягодным соусом", weight: "130", price: 8,
      desc: "Сливочная панакотта с цветочным медом, ванилью и ягодным соусом.",
      photo: "panna-cotta.jpg" },
    { id: "ice-cream", cat: "deserty", name: "Мороженое", weight: "50", price: 4,
      desc: "",
      photo: null }
  ],

  /* Подборка «Попробуйте в MOVK» на главной (редакционная, не список бестселлеров) */
  featured: ["draniki-machanka", "beef-cheeks", "salmon-parchment", "basque-cheesecake"]
};
