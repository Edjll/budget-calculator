import React, { Component } from 'react';
import './css/BudgetCalculator.css';
import ItemsBox from '../ItemsBox/ItemsBox';
import Datepicker from '../Datepicker/Datepicker';
import Display from '../Display/Display';
import {constants, storage, app} from '../config/config';
import Settings from '../Settings/Settings';
import SignIn from '../SignIn/SignIn';

class BudgetCalculator extends Component {
  constructor(props) {
    super(props);

    let localStorageApp = JSON.parse(localStorage.getItem(constants.key));

    if (!localStorageApp) {
      localStorageApp = app;
      localStorage.setItem(constants.key, JSON.stringify(localStorageApp));
    }

    const user = localStorageApp.users[localStorageApp.active];

    let income = 0, expence = 0;

    if (user.budget.incomes.years[user.date.year] && user.budget.incomes.years[user.date.year].months[user.date.month]) {
      income = user.budget.incomes.years[user.date.year].months[user.date.month].money;
    }
    if (user.budget.expences.years[user.date.year] && user.budget.expences.years[user.date.year].months[user.date.month]) {
      expence = user.budget.expences.years[user.date.year].months[user.date.month].money;
    }

    this.styles = constants.styles;

    this.state = {
      money : {
        all : user.budget.incomes.money - user.budget.expences.money,
        month : income - expence
      },
      date : {
        month : user.date.month,
        year : user.date.year
      },
      items : {
        incomes : user.budget.incomes.years[user.date.year] && user.budget.incomes.years[user.date.year].months[user.date.month] ? user.budget.incomes.years[user.date.year].months[user.date.month].values : [],
        expences : user.budget.expences.years[user.date.year] && user.budget.expences.years[user.date.year].months[user.date.month] ? user.budget.expences.years[user.date.year].months[user.date.month].values : []
      },
      settings : {
        active : constants.pages.app,
        theme : user.settings.theme,
        language : user.settings.language
      },
      size : {
        value : 0,
        object : this.props.size
      }
    }
  }

  changeDate(key, value, year = this.state.date.year) {
    const state = this.state;

    state.date[key] = value;
    if (key === constants.datepicker.selectable.possible[0]) state.date.year = year;

    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));

    let income = 0, expence = 0;

    if (localStorageApp.users[localStorageApp.active].budget.incomes.years[state.date.year] && localStorageApp.users[localStorageApp.active].budget.incomes.years[state.date.year].months[state.date.month]) {
      income = localStorageApp.users[localStorageApp.active].budget.incomes.years[state.date.year].months[state.date.month].money;
    }
    if (localStorageApp.users[localStorageApp.active].budget.expences.years[state.date.year] && localStorageApp.users[localStorageApp.active].budget.expences.years[state.date.year].months[state.date.month]) {
      expence = localStorageApp.users[localStorageApp.active].budget.expences.years[state.date.year].months[state.date.month].money;
    }

    state.items.incomes = localStorageApp.users[localStorageApp.active].budget.incomes.years[state.date.year] && localStorageApp.users[localStorageApp.active].budget.incomes.years[state.date.year].months[state.date.month] ? localStorageApp.users[localStorageApp.active].budget.incomes.years[state.date.year].months[state.date.month].values : [];
    state.items.expences = localStorageApp.users[localStorageApp.active].budget.expences.years[state.date.year] && localStorageApp.users[localStorageApp.active].budget.expences.years[state.date.year].months[state.date.month] ? localStorageApp.users[localStorageApp.active].budget.expences.years[state.date.year].months[state.date.month].values : [];
    state.money.month = income - expence;

    localStorageApp.users[localStorageApp.active].date = state.date;

    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));

    this.setState(state);
  }

  createItem = (key, value) => {
    let localStorageApp = JSON.parse(localStorage.getItem(constants.key));
    const state = this.state;
    const valueNumber = Number(value);
    const money = key === constants.budget.incomes ? valueNumber : -valueNumber;

    if (!localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year]) {
      localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year] = { months : { } }
    }
    if (!localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month]) {
      localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month] = {
        money : valueNumber,
        values : [{
          id : 0,
          value : value
        }]
      }
    } else {
      localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].money = Math.round((localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].money + valueNumber) * 100) / 100;
      const index = localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].values.length ? localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].values[0].id + 1 : 0;
      localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].values.unshift({
        id : index,
        value : value
      });
    }

    localStorageApp.users[localStorageApp.active].budget[key].money = Math.round((localStorageApp.users[localStorageApp.active].budget[key].money + valueNumber) * 100) / 100;

    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));

    state.items[key] = localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].values;

    state.money.month = Math.round((state.money.month + money) * 100) / 100;
    state.money.all = Math.round((state.money.all + money) * 100) / 100;

    this.setState(state);
  }

  deleteItem = (key, id) => {
    const index = this.state.items[key].map(item => item.id).indexOf(id);
    let items = this.state.items[key];
    const state = this.state;
    const value = Number(items[index].value);
    const money = key === constants.budget.incomes ? -value : value;

    items.splice(index, 1);

    state.money.month = Math.round((state.money.month + money) * 100) / 100;
    state.money.all = Math.round((state.money.all + money) * 100) / 100;

    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));
    localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].values = items;
    localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].money = Math.round((localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].money - value) * 100) / 100;
    localStorageApp.users[localStorageApp.active].budget[key].money = Math.round((localStorageApp.users[localStorageApp.active].budget[key].money - value) * 100) / 100;

    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));

    this.setState(state);
  }

  changeItemValue = (key, id, value) => {
    const index = this.state.items[key].map(item => item.id).indexOf(id);
    let items = this.state.items[key];
    const state = this.state;
    const difference = Math.round((Number(value) - Number(items[index].value)) * 100) / 100;
    const money = key === constants.budget.incomes ? difference : -difference;

    items[index].value = value;

    state.money.month = Math.round((state.money.month + money) * 100) / 100;
    state.money.all = Math.round((state.money.all + money) * 100) / 100;

    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));
    localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].values = items;
    localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].money = Math.round((localStorageApp.users[localStorageApp.active].budget[key].years[this.state.date.year].months[this.state.date.month].money + difference) * 100) / 100;
    localStorageApp.users[localStorageApp.active].budget[key].money = Math.round((localStorageApp.users[localStorageApp.active].budget[key].money + difference) * 100) / 100;

    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));

    this.setState(state);
  }

  openSettings() {
    const state = this.state;
    state.settings.active = constants.pages.settings;
    this.setState(state);
  }

  openApp() {
    const state = this.state;
    state.settings.active = constants.pages.app;
    this.setState(state);
  }

  openLogin() {
    const state = this.state;
    state.settings.active = constants.pages.signIn;
    this.setState(state);
  }

  changeTheme(value) {
    const state = this.state;
    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));
    state.settings.theme = value;
    localStorageApp.users[localStorageApp.active].settings.theme = value;
    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));
    this.setState(state);
  }

  changeLanguage(value) {
    const state = this.state;
    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));
    state.settings.language = value;
    localStorageApp.users[localStorageApp.active].settings.language = value;
    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));
    this.setState(state);
  }

  createUser(username, password) {
    
    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));

    for (const u in localStorageApp.users) {
      if (u === username) {
        return {status : false, error : storage[this.state.settings.language].errors.registration};
      }
    }

    localStorageApp.users[username] = app.users.anonim;
    localStorageApp.users[username].username = username;
    localStorageApp.users[username].password = password;
    localStorageApp.active = username;
    localStorage.setItem(constants.key, JSON.stringify(localStorageApp));

    const user = localStorageApp.users[username];

    this.changeUser(user);

    return {status : true, error : ''};
  }

  login(username, password) {
    
    const localStorageApp = JSON.parse(localStorage.getItem(constants.key));

    for (const u in localStorageApp.users) {
      if (u === username && localStorageApp.users[u].password === password) {
        localStorageApp.active = username;
        localStorage.setItem(constants.key, JSON.stringify(localStorageApp));

        const user = localStorageApp.users[username];

        this.changeUser(user);

        return {status : true, error : ''};
      }
    }

    return {status : false, error : storage[this.state.settings.language].errors.login};
  }

  changeUser(user) {
    let income = 0, expence = 0;

    if (user.budget.incomes.years[user.date.year] && user.budget.incomes.years[user.date.year].months[user.date.month]) {
      income = user.budget.incomes.years[user.date.year].months[user.date.month].money;
    }
    if (user.budget.expences.years[user.date.year] && user.budget.expences.years[user.date.year].months[user.date.month]) {
      expence = user.budget.expences.years[user.date.year].months[user.date.month].money;
    }
    
    this.setState({
      money : {
        all : user.budget.incomes.money - user.budget.expences.money,
        month : income - expence
      },
      date : {
        month : user.date.month,
        year : user.date.year
      },
      items : {
        incomes : user.budget.incomes.years[user.date.year] && user.budget.incomes.years[user.date.year].months[user.date.month] ? user.budget.incomes.years[user.date.year].months[user.date.month].values : [],
        expences : user.budget.expences.years[user.date.year] && user.budget.expences.years[user.date.year].months[user.date.month] ? user.budget.expences.years[user.date.year].months[user.date.month].values : []
      },
      settings : {
        active : constants.pages.app,
        theme : user.settings.theme,
        language : user.settings.language
      }
    });
  }

  objectSize() {
    if (typeof this.state.size.object === 'number') return this.state.size.object;
    else if (typeof this.state.size.object === 'object') {
      const height = this.state.size.object.clientHeight * 0.8;
      const width = this.state.size.object.clientWidth * 0.8;
      if (height > width) return width;
      else if (width > height) return height;
    }
  }

  windowResize() {
    const state = this.state;;

    state.size.value = this.objectSize();

    this.styles.settingsActive = { transform : `rotateY(-90deg) translateZ(${ state.size.value }px)` };
    this.styles.signInActive = { transform : `rotateY(-90deg) rotateZ(90deg) translate3d(${ state.size.value / 2 }px, ${ state.size.value / 2 }px, ${ state.size.value }px)` };

    this.setState(state);
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResize.bind(this));
    this.windowResize();
  }

  render () {

    return (
        <div 
          id = 'budget-calculator' 
          style = { { 
            width : this.state.size.value,
            height : this.state.size.value,
            perspective : this.state.size.value * 2 
          } } 
        >
          <div className = 'container-3d' style = { this.styles[this.state.settings.active] }>
            <div 
              className = { `main${ ` main-${ this.state.settings.theme }` }` }
              style = { { boxShadow : `inset 0 0 ${this.state.size.value * 0.027}px -${this.state.size.value * 0.005}px ${this.styles.boxShadows[this.state.settings.theme]}` } }
            >
              <Display
                money = { {
                  title : storage[this.state.settings.language].budget.money,
                  value : this.state.money
                 }}
                settingsActive = { this.state.settings.active }
                openSettings = { this.openSettings.bind(this) }
                size = { this.state.size.value }
                storage = { { settings : storage[this.state.settings.language].settings.title } }
              />
              <div className = 'date'>
                <Datepicker
                  date = { {
                      month : storage[this.state.settings.language].months[this.state.date.month],
                      year : this.state.date.year
                    } }
                  selectable = { constants.datepicker.selectable }
                  months = { storage[this.state.settings.language].months }
                  changeDate = { this.changeDate.bind(this) }
                  size = { this.state.size.value }
                  boxShadows = { this.styles.boxShadows }
                />
              </div>
              <div className = 'items-boxes'>
                <ItemsBox
                  description = { constants.budget.incomes }
                  title = { storage[this.state.settings.language].budget.incomes }
                  items = { this.state.items.incomes }
                  createItem = { this.createItem.bind(this) }
                  deleteItem = { this.deleteItem.bind(this) }
                  changeItemValue = { this.changeItemValue.bind(this) }
                  size = { this.state.size.value }
                  boxShadows = { this.styles.boxShadows }
                />
                <ItemsBox
                  description = { constants.budget.expences }
                  title = { storage[this.state.settings.language].budget.expences }
                  items = { this.state.items.expences }
                  createItem = { this.createItem.bind(this) }
                  deleteItem = { this.deleteItem.bind(this) }
                  changeItemValue = { this.changeItemValue.bind(this) }
                  size = { this.state.size.value }
                  boxShadows = { this.styles.boxShadows }
                />
              </div>
            </div>
            <Settings
              changeTheme = { this.changeTheme.bind(this) }
              themes = { constants.themes }
              languages = { constants.languages}
              changeLanguage = { this.changeLanguage.bind(this) }
              openApp = { this.openApp.bind(this) }
              openLogin = { this.openLogin.bind(this) }
              openSettings = { this.openSettings.bind(this) }
              theme = { this.state.settings.theme }
              language = { this.state.settings.language }
              storage = { {
                settings : storage[this.state.settings.language].settings,
                signIn : storage[this.state.settings.language].signIn.login,
                app : storage[this.state.settings.language].app
              } }
              size = { this.state.size.value }
              boxShadows = { this.styles.boxShadows }
            />
            <SignIn 
              openSettings = { this.openSettings.bind(this) }
              openApp = { this.openApp.bind(this) }
              createUser = { this.createUser.bind(this) }
              settingsActive = { this.state.settings.active === constants.pages.settings }
              login =  { this.login.bind(this) }
              storage = { {
                settings : storage[this.state.settings.language].settings.title,
                signIn : storage[this.state.settings.language].signIn,
                app : storage[this.state.settings.language].app
              } }
              theme = { this.state.settings.theme }
              size = { this.state.size.value }
              boxShadows = { this.styles.boxShadows }
            />
          </div>
        </div>
    );
  }
}

export default BudgetCalculator;
