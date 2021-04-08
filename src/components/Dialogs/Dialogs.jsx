import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {

    // путь для NavLink в отдельной переменной
    let path = "/dialogs/" + props.id

    return (
        <div className={s.item}>
            {/* Отдельный пользователь с ссылкой и Именем
                        получаем из пропсов Имя пользователя */}
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>
            {/* Получаем из пропсов сообщение */}
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {


    // Создаём входные данные для пользователей на странице диалогов
    let dialogs = [
        { id: 1, name: 'Alexandr' },
        { id: 2, name: 'Helga' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'German' }
    ]


    // Мапим входные данные, создаём новый массив 

    let dialogElements = dialogs.map( el => <DialogItem id={el.id} name={el.name} />) 

    // Пример как выглядел бы dialogElements без .map()

    // let dialogElements =  [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
    // ]

    // Создаём входные данные для сообщений 

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        
    ]


    // Мапим входные данные, создаём новый массив

    let messageElements = messages.map( el => <Message id={el.id} message={el.message} />) 
    
    


    // let messageElements =  [
    //     <Message message={messagesData[0].message} />,
    //     <Message message={messagesData[1].message} />,
    //     <Message message={messagesData[2].message} />,
    //     <Message message={messagesData[3].message} />
    // ]

   


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {/* Пользователи */}
                {dialogElements}
            </div>
            <div className={s.messages}>
                {/* Сообщения пользователей */}
                {messageElements}
            </div>
        </div>
    )
}



export default Dialogs;