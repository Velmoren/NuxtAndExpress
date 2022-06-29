<template>
  <div class="about-content pb-5">
    <h1 class="about-title">
      Предприятие СТАНДАРТ основано в 1989 году. Поставкой и реализацией метизной продукции в Республике Беларусь и
      странах СНГ мы занимаемся с 2002 года.
    </h1>

    <img class="about-image mb-3" src="@/assets/images/about_img.jpg" alt="about_img">

    <p class="about-text mb-3">
      Наше предприятие предлагает полный сервис в области поставки крепежных изделий для производства сельхозтехники,
      ремонта машин и оборудования, для строительства, энергетики, нефтехимической отрасли, станко и машиностроения, а
      также троса стальные и арматуру для них, соединительные элементы для дерева производства стран ЕВРОСОЮЗА более
      40000 наименований и типоразмеров.
    </p>

    <p class="about-text mb-3">
      Предлагаем изделия из следующих материалов и видов покрытий, согласно норм DIN, ISO, PN, ГОСТ, EN, ANSI, UNI, в
      классах прочности 4.6, 5.6, 5.8, 6.8, 8.8, 10.9, 12.9, 14.9:
    </p>

    <ul class="about-list mb-3">
      <li>
        <span>
          изготовленные из стали в т.ч. нержавеющей, кислотостойкой, огнестойкой, алюминия, латуни, бронзы, меди, титана и полиамида;
        </span>
      </li>
      <li>
        <span>
          изделия с метрической, мелкой метрической, и дюймовой резьбой;
        </span>
      </li>
      <li>
        <span>
          с покрытием антикоррозийным: гальванический цинк, горячий цинк, фосфатирование и другие;
        </span>
      </li>
      <li>
        <span>
          комплекты HV для напряженных стальных конструкций (болт, гайка, шайбы);
        </span>
      </li>
      <li>
        <span>
          диаметры от 1 мм до 120 мм;
        </span>
      </li>
    </ul>

    <p class="about-text mb-3">
      Гарантируем высокое качество и взаимовыгодные условия сотрудничества. Надеемся, что и Вы будете в числе постоянных
      партнеров нашего предприятия !!!
    </p>

    <h3 class="about-subtitle mb-3">
      РЕКВИЗИТЫ
    </h3>

    <b-list-group class="about-contacts">
      <b-list-group-item class="about-contacts-item">
        <div class="mb-2 mb-md-0">
          <strong>Владелец магазина</strong>
        </div>
        <div>
          <span>СтандартКонтакт ООО</span>
        </div>
      </b-list-group-item>

      <b-list-group-item class="about-contacts-item">
        <div class="mb-2 mb-md-0">
          <strong>Свидетельство о регистрации</strong>
        </div>
        <div>
          <span>УНП 191782513 от 20.06.2006 г.</span>
        </div>
      </b-list-group-item>

      <b-list-group-item class="about-contacts-item">
        <div class="mb-2 mb-md-0">
          <strong>Дата регистрации в Торговом реестре РБ</strong>
        </div>
        <div>
          <span>28.05.2012 г.</span>
        </div>
      </b-list-group-item>

      <b-list-group-item class="about-contacts-item">
        <div class="mb-2 mb-md-0">
          <strong>Юридический адрес</strong>
        </div>
        <div>
          <span>г. Минск, ул. Малая, д.1, ком. 7</span>
        </div>
      </b-list-group-item>

      <b-list-group-item class="about-contacts-item">
        <div class="mb-2 mb-md-0">
          <strong>Контактные телефоны</strong>
        </div>
        <div>
          <span>+375 17 270-70-70, +375 29 602-04-06</span>
        </div>
      </b-list-group-item>

      <b-list-group-item class="about-contacts-item">
        <div class="mb-2 mb-md-0">
          <strong>Адрес для почтовых отправлений</strong>
        </div>
        <div>
          <span>220024, г. Минск, ул. Бабушкина 90, офис 307</span>
        </div>
      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  &-content {
    width: 1030px;
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    color: rgb(158, 185, 202);
    margin-bottom: 20px;
    line-height: 32px;
    text-align: center;
  }

  &-subtitle {
    text-transform: uppercase;
    font-size: 18px;
    color: rgb(158, 185, 202);
  }

  &-image {
    border-radius: 5px;
    border: 2px solid #608d98;
    min-height: 260px;
  }

  &-text {
    font-size: 16px;
    line-height: 20px;
    color: white;
  }

  &-list {
    font-size: 16px;
    line-height: 20px;
    list-style: disc;
    padding-left: 20px;
    color: #608d98;

    li {
      margin-bottom: 10px;
    }

    span {
      color: white;
    }
  }

  &-contacts-item {
    display: flex;
    div {
      width: 50%;
    }

    strong {
      color: #608d98;
    }
  }
}

@media (max-width: 1400px) {
  .about {
    &-content {
      width: 860px;
    }

    &-title {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 20px;
    }

    &-image {
      min-height: 220px;
    }

    &-text, &-list {
      font-size: 14px;
      line-height: 20px;
    }
  }
}

@media (max-width: 1200px) {
  .about {
    &-content {
      width: 690px;
    }

    &-title {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 20px;
    }

    &-image {
      min-height: 175px;
    }
  }
}

@media (max-width: 991px) {
  .about {
    &-content {
      width: 100%;
    }

    &-image {
      min-height: 175px;
    }
  }
}

@media (max-width: 768px) {
  .about {
    &-title {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 20px;
    }

    &-image {
      min-height: auto;
    }

    &-contacts-item {
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
}
</style>
