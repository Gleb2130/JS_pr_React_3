export const filmD= [
    {
        id:"JIfdssfo",
        name:"Банши Инишерина",
        poster:"https://static.hdrezka.ac/i/2022/12/14/lcd2c6d125ad3yt99i50h.png",
        age:2022,
        description:"Действие фильма происходит в 1923 году, когда гражданская война в Ирландии практически закончилась. На вымышленном острове Инишерин живет Колм Доэрти, являющийся фолк-музыкантом. Неожиданно мужчина прекращает всякие отношения со своим старым другом и давним собутыльником Патриком Салливаном. Правда, решение первого вызывает в дальнейшем непредвиденные последствия. Мировая премьера черной трагиком",
        favorite:false
    },
    {
        id:"32roijDf",
        name:"Стражи Галактики. Часть 3",
        poster:"https://upload.wikimedia.org/wikipedia/ru/thumb/3/30/Guardians_of_the_Galaxy_Vol_3_poster.jpg/800px-Guardians_of_the_Galaxy_Vol_3_poster.jpg",
        age:2023,
        description:"Питер Квилл еще горюет по Гаморе, но вскоре отголоски прошлого участника команды — Ракеты — кардинально меняют его жизнь. Чтобы спасти друга, мужчина снова объединяет силы со Стражами Галактики. Им предстоит выполнить не только новую миссию, но и защитить всю вселенную. Если они потерпят поражение, тогда всему придет конец. Главного героя в фантастическом боевике Джеймса Ганна сыграл Крисс Пратт",
        favorite:false
    },
    {
        id:"4gogijw",
        name:"Главный герой",
        poster:"https://upload.wikimedia.org/wikipedia/ru/2/22/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9_%D0%B3%D0%B5%D1%80%D0%BE%D0%B9_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpeg",
        age:2021,
        description:"Любой, даже самый обыкновенный и ничем не выделяющийся из толпы человек представляет себя ключевым героем собственного рассказа или видеоигры — у кого какие вкусы. Но главный герой фильма в прямом смысле серая посредственность: он работает обычным клерком в банке, а каждый день его обчищают другие игроки онлайн-видеоигры. Случайно прикончив аватар, он впервые становится свидетелем настоящего мира",
        favorite:false
    },
];

export const importLS=()=>{
    for (let index = 0; index < localStorage.length; index++) {
        const LS = localStorage.getItem(index);
        if(LS===null){
            continue;
        }
        const Data = JSON.parse(LS);
        if (filmD.find(item => item.id === Data.id)){
            if (filmD.find(item => item.favorite !== Data.favorite)){
                for (const iterator of filmD) {
                    if(iterator.id === Data.id){
                        iterator.favorite = Data.favorite;
                    }
                }
            }
            continue;
        }
        filmD.push({
            id:0,
            name:"",
            poster:"",
            age:0,
            description:"",
            favorite:false
        });
        filmD[filmD.length-1].id = Data.id;
        filmD[filmD.length-1].name = Data.name;
        filmD[filmD.length-1].poster = Data.poster;
        filmD[filmD.length-1].age = Data.age;
        filmD[filmD.length-1].description = Data.description;
        filmD[filmD.length-1].favorite = Data.favorite;
    }
}

export const swFav=(idE)=>{
    const index_a = filmD.findIndex(item => item.id === idE);
    if (filmD[index_a].favorite){
        filmD[index_a].favorite = false;
    }
    else{
        filmD[index_a].favorite = true;
    } 
}

export const updateLS=(idE)=>{
    const index_a = filmD.findIndex(item => item.id === idE); 
    let index_LS = 0
    for (index_LS = 0; index_LS < localStorage.length; index_LS++) {
        const obj = JSON.parse(localStorage.getItem(index_LS));
        if(obj.id ==idE){
            break;
        }
    }

    localStorage.removeItem(index_LS);
    localStorage.setItem(index_LS,JSON.stringify(filmD[index_a]));
    console.log("Update",localStorage.getItem(index_LS))
}


const checkUnique=(obj)=>{
    if(localStorage.length===0){
        return-1;
    }
    let ret=0;
    for (let index = 0; index < localStorage.length; index++) {
        const LS = localStorage.getItem(index);
        if(LS===null){
            continue;
        }
        const Data = JSON.parse(LS);
        if (obj.id == Data.id ){
            if(obj.favorite == Data.favorite){
                continue;
            }
            else{
                return index;
            }
        }
        else{
            ret++;
        }
    }

    if (ret===localStorage.length)
        return -1;
    else
        return -2;
}

export const exportLS=()=>{
    for (let obj of filmD){
        let index = checkUnique(obj);
        if (index > -1){
            localStorage.removeItem(index);
            localStorage.setItem(index,JSON.stringify(obj));

        }
        else if (index===-1){
            localStorage.setItem(localStorage.length,JSON.stringify(obj));
        }
    }

}


export const delElementById=(idE)=>{

    for (let index_LS = 0; index_LS < localStorage.length; index_LS++) {
        const obj = JSON.parse(localStorage.getItem(index_LS));
        if(obj.id ==idE){
            localStorage.removeItem(index_LS);
        }
    }

}