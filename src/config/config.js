export const constants = {
    budget : {
        incomes : 'incomes',
        expences : 'expences'
    },
    key : 'budget_calculator',
    themes : {
        light : 'light',
        dark : 'dark'
    },
    languages : {
        ru : 'ru',
        en : 'en'
    },
    datepicker : {
        selectable : {
            value : 0,
            possible : ["month", "year"]
        }
    },
    pages : {
        app : '',
        signIn : 'signInActive',
        settings : 'settingsActive'
    },
    styles : {
        settingsActive : {
            transform: 'rotateY(-90deg) translateZ(500px)'
        },
        signInActive : {
            transform: 'rotateY(-90deg) rotateZ(90deg) translate3d(250px, 250px, 500px)'
        },
        boxShadows : {
            light : 'black',
            dark : 'white'
        }
    }
};

export const storage = {
    ru : {
        budget : {
            incomes : 'Доходы',
            expences : 'Расходы',
            money : 'Всего'
        },
        months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        settings : {
            title : 'Настройки',
            themes : ['Светлая', 'Тёмная'],
            languages : ['Русский', 'Английский'],
            theme : 'Тема',
            language : 'Язык'
        },
        signIn : {
            login : 'Войти',
            registration : 'Зарегистрироваться',
            username : 'Псевдоним',
            password : 'Пароль'
        },
        app : 'Приложение'
    },
    en : {
        budget : {
            incomes : 'Incomes',
            expences : 'Expences',
            money : 'All'
        },
        months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        settings : {
            title : 'Settings',
            themes : ['Light', 'Dark'],
            languages : ['Russian', 'English'],
            theme : 'Theme',
            language : 'Language'
        },
        signIn : {
            login : 'Login',
            registration : 'Registration',
            username : 'Username',
            password : 'Password'
        },
        app : 'App'
    }
}



export const app = {
    active : "anonim",
    users : {
        anonim : {
            username : "anonim",
            password : '',
            budget : {
                incomes : {
                    years : { },
                    money : 0
                },
                expences : {
                    years : { },
                    money : 0
                }
            },
            date : {
                month : new Date(Date.now()).getMonth(),
                year : new Date(Date.now()).getFullYear()
            },
            settings : {
                theme : constants.themes.dark,
                language : constants.languages.en
            }
        }
    }
}