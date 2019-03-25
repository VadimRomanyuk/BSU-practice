/*uncomment for the test*/
// Task 4
/*var I =*/;(function(){
    var photoPosts = [
        {id: '1',
    
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    
        createdAt: new Date('2005-02-20T23:00:00'),
    
        author: 'Ivanov',
    
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        
        likes : ["Petrov","Sidorov"],
    
        hashTags : ["#sunny","#champ","#Belarus"]
    
       },
    
       {id: '33',
    
        description: 'Манчестер Юнайтед в 1/4 финала ЛЧ',
    
        createdAt: new Date('2016-01-23T23:15:00'),
    
        author: 'Petrov',
    
        photoLink: "http://images.thepeoplesperson.com/wp-content/uploads/2018/02/03160539/Team-min.jpg",
    
        likes : ["Grealish","Sidorov"],
    
        hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]
    
       },
    
       {id: '3',
    
        description: 'Кот с клубком',
    
        createdAt: new Date('2001-03-12T11:11:00'),
    
        author: 'Sidorov',
    
        photoLink: 'https://img.fonwall.ru/o/41/kot_klubok_igra_nitka_stol.jpg?route=mid&amp;h=750',
    
        likes : ["Petrov","Grealish","Sidorov","Snow"],
    
        hashTags : ["#color","#pretty","#animals"]
    
       },
    
       {id: '4',
    
        description: 'Красная Панда',
    
        createdAt: new Date('1999-08-23T10:01:00'),
    
        author: 'Snow',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/1341737/c78450e7-d973-4f65-9b86-d2b2cea1b010/s1200?webp=false',
    
        likes : ["Petrov","Grealish","Sidorov","Tolisso","Snow"],
    
        hashTags : ["#garden","#sunny","#pretty","#animals"]
    
       },
        
       {id: '5',
    
        description: 'Снежный Барс',
    
        createdAt: new Date('1997-03-11T18:08:00'),
    
        author: 'Grealish',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/401063/613954c5-50c8-4350-8243-87d81542b316/s1200?webp=false',
    
        likes : ["Petrov","Grealish","Snow","Tolisso"],
    
        hashTags : ["#color","#sunny","#pretty","#animals"]
    
       },
        
       {id: '6',
    
        description: 'Клубника',
    
        createdAt: new Date('2019-02-25T23:45:00'),
    
        author: 'Dudek',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/1602331/d332e4aa-1e7a-46e6-a14a-e7a5b90a7c23/s1200?webp=false',
    
        likes : ["Petrov","Grealish","Ivanov","Tolisso"],
    
        hashTags : ["#food","#sunny","#pretty","#fields"]
    
       },
        
       {id: '7',
    
        description: 'Сакура',
    
        createdAt: new Date('1996-11-01T05:10:00'),
    
        author: 'Tolisso',
    
        photoLink: 'https://www.nastol.com.ua/download.php?img=201803/2560x1600/nastol.com.ua-274419.jpg',
    
        likes : ["Petrov","Grealish","Sidorov","Tolisso"],
    
        hashTags : ["#color","#sunny","#pretty","#garden"]
    
       },
        
       {id: '8',
    
        description: 'Слон',
    
        createdAt: new Date('1998-02-23T23:00:00'),
    
        author: 'Brooks',
    
        photoLink: 'https://avatars.mds.yandex.net/get-zen_doc/60857/pub_5b8fc55e355be400aaa78c03_5b8fc58c355be400aaa78c06/scale_1200',
    
        likes : ["Petrov","Dudek","Tolisso"],
    
        hashTags : ["#color","#sunny","#pretty","#animals"]
    
       },
        
       {id: '9',
    
        description: 'Морская звезда',
    
        createdAt: new Date('2018-02-23T23:00:00'),
    
        author: 'Sidorov',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/1043736/d99c2a0c-b0ff-4fa0-a87b-dd14555699d1/s1200?webp=false',
    
        likes : ["Dudek","Grealish","Sidorov","Tolisso"],
    
        hashTags : ["#sunny","#water","#animals"]
    
       },
        
       {id: '10',
    
        description: 'Жирафы на природе',
    
        createdAt: new Date('2001-05-17T17:00:00'),
    
        author: 'Brooks',
    
        photoLink: 'https://www.1zoom.ru/big2/807/304544-Sepik.jpg',
    
        likes : ["Petrov","Grealish","Dudek","Tolisso", "Brooks"],
    
        hashTags : ["#sunny","#pretty","#animals"]
    
       },
        
       {id: '11',
    
        description: 'Извилистая дорога',
    
        createdAt: new Date('2003-03-14T12:01:00'),
    
        author: 'Dudek',
    
        photoLink: 'https://wallpaperscave.ru/images/original/18/06-12/man-made-road-57025.jpg',
    
        likes : ["Petrov","Grealish","Tolisso"],
    
        hashTags : ["#evening","#pretty","#way"]
    
       },
        
       {id: '12',
    
        description: '«Феррари» – это «Манчестер Юнайтед». У нее появился свой Сульшер',
    
        createdAt: new Date('2018-02-23T23:00:00'),
    
        author: 'Ivanov',
    
        photoLink: 'https://by.tribuna.com/tribuna/blogs/pitstop/2372644.html',
    
        likes : ["Petrov","Grealish","Sidorov"],
    
        hashTags : ["#ferrari","#sunny","#MU","#cars"]
    
       },
        
       {id: '13',
    
        description: '«Зенит», киевское «Динамо» и «Арсенал» потерпели поражения в первых матчах 1/8 финала Лиги Европы',
        
        createdAt: new Date('2008-09-23T10:11:00'),
    
        author: 'Snow',
    
        photoLink: 'https://sport.tut.by/news/football/629103.html',
    
        likes : ["Petrov","Grealish","Ivanov","Tolisso"],
    
        hashTags : ["#RusFootball","#1/8","#EL"]
    
       },
        
       {id: '14',
    
        description: 'Арсен Венгер, возможно, продолжит карьеру в ФИФА',
    
        createdAt: new Date('2007-08-20T19:13:00'),
    
        author: 'Dudek',
    
        photoLink: 'https://www.pressball.by/news/football/320958',
    
        likes : ["Grealish","Sidorov","Tolisso"],
    
        hashTags : ["#WENYA","#FIFA"]
    
       },
        
       {id: '15',
    
        description: 'Клаудио Раньери возглавил Рому!',
    
        createdAt: new Date('2014-02-03T13:00:00'),
    
        author: 'Petrov',
    
        photoLink: 'https://www.pressball.by/news/football/320972',
    
        likes : ["Petrov","Grealish","Sidorov","Tolisso","Ivanov"],
    
        hashTags : ["#Roma","#Ranieri","#football"]
    
       },
        
       {id: '16',
    
        description: 'Шоколад',
    
        createdAt: new Date('2017-01-23T15:49:00'),
    
        author: 'Brooks',
    
        photoLink: 'https://s1.1zoom.ru/big3/21/Chocolate_Nuts_Cinnamon_436017.jpg',
    
        likes : ["Petrov","Tolisso"],
    
        hashTags : ["#breakfast","#delicious","#chocolate"]
    
       },
        
       {id: '17',
    
        description: 'Воздушные шары',
    
        createdAt: new Date('2016-03-11T20:15:00'),
    
        author: 'Ivanov',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/939428/12f68ca3-b7eb-4a55-99fb-f6e17a093c71/s1200?webp=false',
    
        likes : ["Petrov","Sidorov","Tolisso"],
    
        hashTags : ["#color","#sky","#pretty","#balls"]
    
       },
        
       {id: '18',
    
        description: 'Пейзаж',
    
        createdAt: new Date('2009-02-09T10:10:00'),
    
        author: 'Tolisso',
    
        photoLink: 'https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32997.jpg',
    
        likes : ["Petrov","Grealish","Sidorov","Tolisso"],
    
        hashTags : ["#color","#sunny","#pretty","#animals"]
    
       },
        
       {id: '19',
    
        description: 'Городской пейзаж',
    
        createdAt: new Date('2007-07-07T07:00:00'),
    
        author: 'Grealish',
    
        photoLink: 'https://www.nastol.com.ua/pic/201206/1440x900/nastol.com.ua-26198.jpg',
    
        likes : ["Petrov","Sidorov","Ivanov"],
    
        hashTags : ["#city","#sunny","#pretty"]
    
       },
        
       {id: '20',
    
        description: 'Кофейные зерна',
    
        createdAt: new Date('2005-02-04T22:48:00'),
    
        author: 'Petrov',
    
        photoLink: 'https://www.1zoom.ru/big2/504/332983-zero.jpg',
    
        likes : ["Brooks"],
        
        hashTags : ["#coffee","#sunny"]
    
       },
    
    ];
    
    return{
      getPhotoPost : function(id) {
    if(parseInt(id) && !(/[^0-9]/.test(id)))
    {  
      id = Number.parseInt(id);
      if(id > 0){ 
        var res = photoPosts.filter(function(a)
        {
          if(parseInt(a.id) == id){return true;}
          return false;
        })
        if(this.checkIt(res) && res.length > 0)
        {console.log("This post \n");
        console.log(res[0]);
        return res[0];}
      }
    }
    return false;
      },
      removePhotoPost : function(id)
      {
        if(this.getPhotoPost(id) !== false)
        {  var position = -1;
          for(var i = 0 ; i < photoPosts.length; i++)
          {
            if(photoPosts[i].id == id){position = i;}
          }
          if(position > -1)
          { photoPosts.splice(position,1);
          console.log("After removal")
          console.log(photoPosts);
          return true;
          }
        }
        console.log("No such post");
        return false;
      },
      checkIt: function(Object)
      {
        return !!Object;
      }, 
      checkForString : function(Object)
      {
        
       return (typeof(Object) === 'string');
      },
      checkForDate: function(Object)
      {  if(Object instanceof Date){return true;}
      Object = Object.toString();
        var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}(T[0-2][0-9]:[0-5][0-9]:[0-5][0-9])*$/;
        if(!regex_date.test(Object)){return false;}
      if(isNaN(new Date(Object))){return false;};
      var parts = Object.split("-");
      var realDate = new Date(Object);
      if(parts[0] == realDate.getFullYear().toString() &&
       parts[1]-1 == realDate.getMonth().toString() && parts[2] == realDate.getDate().toString())
      {
        return true;
      }
      return false;
      },
      checkForId: function(Object)
      {
        if(/[^0-9]/.test(Object)){return false;}
        return true;
      },
      checkEmptyStr: function(Object)
      {
        if((Object.trim())){return false;}
        return true;
      },
      validatePhotoPost: function(Object)
      {
        if(this.checkIt(Object) && this.checkIt(Object.id) && this.checkIt(Object.description)
         && this.checkIt(Object.createdAt) && this.checkIt(Object.author) && this.checkIt(Object.photoLink))
        {
           if(this.checkForString(Object.id) && this.checkForString(Object.description) &&
            this.checkForDate(Object.createdAt) && this.checkForString(Object.author) 
            && this.checkForString(Object.photoLink))
            {
               if(!this.checkEmptyStr(Object.author) && !this.checkEmptyStr(Object.photoLink) 
               && Object.description.length<200 && this.checkForId(Object.id))
               {
                 console.log("Good Post");
                 return true;
               }
            }
          }
          console.log("Invalidate PhotoPost");
        return false;
      },
      addPhotoPost: function(Object)
      {
        if(this.validatePhotoPost(Object))
        {
          photoPosts.push(Object);
          if(photoPosts[Object.id])
          {
            if(this.editPhotoPost(Object.id, Object))
            {
              return true;
            }
            return false;
          }
          console.log("Photopost added successfully")
          console.log(photoPosts);
          return true;
        }
        return false;
      },
      editPhotoPost: function(id, newPost)
      {
         if(!this.checkForId(id) || this.getPhotoPost(id) == false){
          console.log("There is no such post") 
          return false;}
          if(this.validatePhotoPost(this.getPhotoPost(id)))
          {
            if(this.checkForString(newPost.photoLink) && !this.checkEmptyStr(newPost.photoLink))
            {
              photoPosts[id-1].photoLink = newPost.photoLink;
              console.log("photolink changed successfully")
            }
            if(this.checkForString(newPost.description) && !this.checkEmptyStr(newPost.description))
            {
              photoPosts[id-1].description = newPost.description;
              console.log("description changed successfully")
            }
            console.log("Changed post ")
            console.log(photoPosts[id-1]);
            return true;
          }
          return false;
      },
      compareDates: function(a,b){return a.createdAt - b.createdAt;},
      getPhotoPosts: function(skip,top, filterConfig)
      {
        skip = skip || 0;
        top = top || 10;
        var res = photoPosts;
        if(!this.checkIt(filterConfig))
        {
          return res.slice(skip,skip+top).sort(this.compareDates);
        }
        if(this.checkIt(filterConfig.author))
        { 
           res = res.filter(function(a)
          {
            return a.author === filterConfig.author;
          });
        }
        if(this.checkIt(filterConfig.dateFrom))
        { 
           res = res.filter(function(a)
          {
            return a.createdAt >= filterConfig.dateFrom;
          });
        }
        if(this.checkIt(filterConfig.dateTo))
        { 
           res = res.filter(function(a)
          {
            return a.createdAt <= filterConfig.dateTo;
          });
        }
        if(this.checkIt(filterConfig.countLikes))
        { 
           res = res.filter(function(a)
          {
            return a.likes.length >= filterConfig.countLikes;
          });
        }
        if(this.checkIt(filterConfig.hastag))
        {
           res = res.filter(function(elem)
          {
            if(elem.hashTags.indexOf(filterConfig.hastag) != -1)
            {return true;}
            return false;
          });
        }
        res = res.slice(skip, skip + top).sort(this.compareDates);
        console.log(res);
        return res;
      }
    }
    
    }());
    /*  Tests:
    I.getPhotoPost(3);
    I.removePhotoPost(9);
    I.validatePhotoPost({author:"Shaw",id:"3",createdAt: new Date(),photoLink:"link",description:"Winter"});
    I.addPhotoPost({author:"Shaw",id:"25",createdAt: new Date(),photoLink:"link",description:"Winter"});
    I.editPhotoPost(3,{author:"Shaw",id:"3",createdAt: new Date(),photoLink:"link",description:"Winter"});
    I.getPhotoPosts(0,10,{author:"Petrov",dateFrom:new Date("2008-02-14"),dateTo:new Date("2019-01-01")});
    */
   //         Task 5
   var photoPosts = [
    {id: '1',

    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

    createdAt: new Date('2005-02-20T23:00:00'),

    author: 'Ivanov',

    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
    
    likes : ["Petrov","Sidorov"],

    hashTags : ["#sunny","#champ","#Belarus"]

   },

   {id: '33',

    description: 'Манчестер Юнайтед в 1/4 финала ЛЧ',

    createdAt: new Date('2016-01-23T23:15:00'),

    author: 'Petrov',

    photoLink: "http://images.thepeoplesperson.com/wp-content/uploads/2018/02/03160539/Team-min.jpg",

    likes : ["Grealish","Sidorov"],

    hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]

   },

   {id: '3',

    description: 'Кот с клубком',

    createdAt: new Date('2001-03-12T11:11:00'),

    author: 'Sidorov',

    photoLink: 'https://img.fonwall.ru/o/41/kot_klubok_igra_nitka_stol.jpg?route=mid&amp;h=750',

    likes : ["Petrov","Grealish","Sidorov","Snow"],

    hashTags : ["#color","#pretty","#animals"]

   },

   {id: '4',

    description: 'Красная Панда',

    createdAt: new Date('1999-08-23T10:01:00'),

    author: 'Snow',

    photoLink: 'https://avatars.mds.yandex.net/get-pdb/1341737/c78450e7-d973-4f65-9b86-d2b2cea1b010/s1200?webp=false',

    likes : ["Petrov","Grealish","Sidorov","Tolisso","Snow"],

    hashTags : ["#garden","#sunny","#pretty","#animals"]

   },
    
   {id: '5',

    description: 'Снежный Барс',

    createdAt: new Date('1997-03-11T18:08:00'),

    author: 'Grealish',

    photoLink: 'https://avatars.mds.yandex.net/get-pdb/401063/613954c5-50c8-4350-8243-87d81542b316/s1200?webp=false',

    likes : ["Petrov","Grealish","Snow","Tolisso"],

    hashTags : ["#color","#sunny","#pretty","#animals"]

   },
    
   {id: '6',

    description: 'Клубника',

    createdAt: new Date('2019-02-25T23:45:00'),

    author: 'Dudek',

    photoLink: 'https://avatars.mds.yandex.net/get-pdb/1602331/d332e4aa-1e7a-46e6-a14a-e7a5b90a7c23/s1200?webp=false',

    likes : ["Petrov","Grealish","Ivanov","Tolisso"],

    hashTags : ["#food","#sunny","#pretty","#fields"]

   },
    
   {id: '7',

    description: 'Сакура',

    createdAt: new Date('1996-11-01T05:10:00'),

    author: 'Tolisso',

    photoLink: 'https://www.nastol.com.ua/download.php?img=201803/2560x1600/nastol.com.ua-274419.jpg',

    likes : ["Petrov","Grealish","Sidorov","Tolisso"],

    hashTags : ["#color","#sunny","#pretty","#garden"]

   },
    
   {id: '8',

    description: 'Слон',

    createdAt: new Date('1998-02-23T23:00:00'),

    author: 'Brooks',

    photoLink: 'https://avatars.mds.yandex.net/get-zen_doc/60857/pub_5b8fc55e355be400aaa78c03_5b8fc58c355be400aaa78c06/scale_1200',

    likes : ["Petrov","Dudek","Tolisso"],

    hashTags : ["#color","#sunny","#pretty","#animals"]

   },
    
   {id: '9',

    description: 'Морская звезда',

    createdAt: new Date('2018-02-23T23:00:00'),

    author: 'Sidorov',

    photoLink: 'https://avatars.mds.yandex.net/get-pdb/1043736/d99c2a0c-b0ff-4fa0-a87b-dd14555699d1/s1200?webp=false',

    likes : ["Dudek","Grealish","Sidorov","Tolisso"],

    hashTags : ["#sunny","#water","#animals"]

   },
    
   {id: '10',

    description: 'Жирафы на природе',

    createdAt: new Date('2001-05-17T17:00:00'),

    author: 'Brooks',

    photoLink: 'https://www.1zoom.ru/big2/807/304544-Sepik.jpg',

    likes : ["Petrov","Grealish","Dudek","Tolisso", "Brooks"],

    hashTags : ["#sunny","#pretty","#animals"]

   },
    
   {id: '11',

    description: 'Извилистая дорога',

    createdAt: new Date('2003-03-14T12:01:00'),

    author: 'Dudek',

    photoLink: 'https://wallpaperscave.ru/images/original/18/06-12/man-made-road-57025.jpg',

    likes : ["Petrov","Grealish","Tolisso"],

    hashTags : ["#evening","#pretty","#way"]

   },
    
   {id: '12',

    description: '«Феррари» – это «Манчестер Юнайтед». У нее появился свой Сульшер',

    createdAt: new Date('2018-02-23T23:00:00'),

    author: 'Ivanov',

    photoLink: 'https://by.tribuna.com/tribuna/blogs/pitstop/2372644.html',

    likes : ["Petrov","Grealish","Sidorov"],

    hashTags : ["#ferrari","#sunny","#MU","#cars"]

   },
    
   {id: '13',

    description: '«Зенит», киевское «Динамо» и «Арсенал» потерпели поражения в первых матчах 1/8 финала Лиги Европы',
    
    createdAt: new Date('2008-09-23T10:11:00'),

    author: 'Snow',

    photoLink: 'https://sport.tut.by/news/football/629103.html',

    likes : ["Petrov","Grealish","Ivanov","Tolisso"],

    hashTags : ["#RusFootball","#1/8","#EL"]

   },
    
   {id: '14',

    description: 'Арсен Венгер, возможно, продолжит карьеру в ФИФА',

    createdAt: new Date('2007-08-20T19:13:00'),

    author: 'Dudek',

    photoLink: 'https://www.pressball.by/news/football/320958',

    likes : ["Grealish","Sidorov","Tolisso"],

    hashTags : ["#WENYA","#FIFA"]

   },
    
   {id: '15',

    description: 'Клаудио Раньери возглавил Рому!',

    createdAt: new Date('2014-02-03T13:00:00'),

    author: 'Petrov',

    photoLink: 'https://www.pressball.by/news/football/320972',

    likes : ["Petrov","Grealish","Sidorov","Tolisso","Ivanov"],

    hashTags : ["#Roma","#Ranieri","#football"]

   },
    
   {id: '16',

    description: 'Шоколад',

    createdAt: new Date('2017-01-23T15:49:00'),

    author: 'Brooks',

    photoLink: 'https://s1.1zoom.ru/big3/21/Chocolate_Nuts_Cinnamon_436017.jpg',

    likes : ["Petrov","Tolisso"],

    hashTags : ["#breakfast","#delicious","#chocolate"]

   },
    
   {id: '17',

    description: 'Воздушные шары',

    createdAt: new Date('2016-03-11T20:15:00'),

    author: 'Ivanov',

    photoLink: 'https://avatars.mds.yandex.net/get-pdb/939428/12f68ca3-b7eb-4a55-99fb-f6e17a093c71/s1200?webp=false',

    likes : ["Petrov","Sidorov","Tolisso"],

    hashTags : ["#color","#sky","#pretty","#balls"]

   },
    
   {id: '18',

    description: 'Пейзаж',

    createdAt: new Date('2009-02-09T10:10:00'),

    author: 'Tolisso',

    photoLink: 'https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32997.jpg',

    likes : ["Petrov","Grealish","Sidorov","Tolisso"],

    hashTags : ["#color","#sunny","#pretty","#animals"]

   },
    
   {id: '19',

    description: 'Городской пейзаж',

    createdAt: new Date('2007-07-07T07:00:00'),

    author: 'Grealish',

    photoLink: 'https://www.nastol.com.ua/pic/201206/1440x900/nastol.com.ua-26198.jpg',

    likes : ["Petrov","Sidorov","Ivanov"],

    hashTags : ["#city","#sunny","#pretty"]

   },
    
   {id: '20',

    description: 'Кофейные зерна',

    createdAt: new Date('2005-02-04T22:48:00'),

    author: 'Petrov',

    photoLink: 'https://www.1zoom.ru/big2/504/332983-zero.jpg',

    likes : ["Brooks"],
    
    hashTags : ["#coffee","#sunny"]

   },

];

  class PostCollection{
    
    constructor(postArray)
    { 
      this._photoPosts = new Array();
      postArray.forEach(elem => {if(PostCollection.validate(elem)){this._photoPosts.push(elem);}});
    }

    static  _mainFields = ["author","createdAt","id","photoLink","likes","hashTags","description"];
  
   static _checkId(id)
    {
      if(!id || (/[^0-9]/.test(id))){return false;}
      return true;
    }

    _isContain(id)
    { 
      if(this._photoPosts.find(elem => elem.id == id)){return true;}
      return false;
    }
    get(id)
    { if(PostCollection._checkId(id)){
      let post;
    if(post = this._photoPosts.find(elem => elem.id == id))
    {
      console.log("Such post is find");
      return post;
    }
  }
    return false;
    }

  static _checkFields(objFields)
   { if(objFields.length != PostCollection._mainFields.length){return false;}
     objFields = objFields.sort();
    PostCollection._mainFields = PostCollection._mainFields.sort();
     for(let i = 0 ; i < PostCollection._mainFields.length;i++)
     {
       if(objFields[i] != PostCollection._mainFields[i]){return false;}
     }
     return true;
   }

    remove(id)
    {
      if(PostCollection._checkId(id))
      {
        let elempos = this._photoPosts.findIndex(elem => elem.id == id)
        if(elempos > -1)
        {
         this._photoPosts.splice(elempos,1);
          console.log("Size of new Array " + this._photoPosts.length);
          return true;
        }
      }
      return false;
    }

    clear()
    {
      this._photoPosts.splice(0,this._photoPosts.length);
      console.log("Collection size : " + this._photoPosts.length);
    }

    static validHelp = {
      id: function(id)
      {
        if( !!id && typeof(id) === 'string' && PostCollection._checkId(id))
        {
          return true;
        }
        return false;
      },
      description: function(description)
      {
        if(!!description && (typeof(description) === 'string') && (description.length < 200)){return true;}
        return false;
      },
      createdAt: function(createdAt)
      {
        if(!!createdAt && createdAt instanceof Date){return true;}
        return false;
      },
      author: function(author)
      {
        if(!!author && (typeof(author) === 'string'))
      {
        if(author.trim()){return true;}
      }
      return false;
      },
      photoLink: function(photoLink)
      {
        if(!!photoLink && typeof(photoLink) === 'string')
        {
          if(photoLink.trim()){return true;}
        }
        return false;
      },
      hashTags: function(hastag){return true;},
      likes: function(hastag){return true;},
    }

    static validate(post)
          {
           let isCorrect = true;
           if(!PostCollection._checkFields(Object.keys(post))){return false;}
        Object.keys(post).forEach(function(elem)
        {if(!PostCollection.validHelp[elem](post[elem]))
          {isCorrect = false;}});
        return isCorrect;
    }

    add(post)
    { if(this.edit(post.id, post)){return true;}
      if(PostCollection.validate(post)){
        console.log("Post has been added to collection")
        this._photoPosts.push(post)
        this._photoPosts = this._photoPosts.sort(this._compareByDate);
      return true; }
      return false;
    }

   edit(id, post)
   {
     if(this._isContain(id) && PostCollection.validate(post))
     {
       let position = this._photoPosts.findIndex(elem => elem.id == id);
       console.log("Post has been updated");
        this._photoPosts[position].description = post.description;
        this._photoPosts[position].photoLink = post.photoLink;
        console.log(this._photoPosts[position]);
        return true;
     }
     return false;
   }

   getPostPosition(post)
   {
    return this._photoPosts.findIndex(elem => elem.id == post.id);
   }

   getPostsCount() {return this._photoPosts.length;}

   _compareByDate(a,b){return b.createdAt - a.createdAt;}
   
   getPage(skip,top,filterConfig)
   {
     skip = skip || 0;
     top = top || 10;
     let filterHelper = {
       author: function(arr, author)
       {
         return arr.filter(function(a){return a.author == author;})
       },
       dateFrom: function (arr, from)
       {
         return arr.filter(function(a){return a.createdAt >= from;})
       },
       dateTo: function(arr, endDate)
       {
         return arr.filter(function(a){return a.createdAt <= endDate;})
       },
       hashtag: function(arr,hashtag)
       {
           return arr.filter(function(a){
             if(a.hashTags.findIndex(elem => elem == hashtag) > -1)
             {return true;}
            return false;})
       },
       likesCount: function(arr,likesCount)
       {
         return arr.filter(function(a){return a.likes.length >= likesCount;})
       }
     }
     let filteredPosts = this._photoPosts;
     if(!!filterConfig){
     Object.keys(filterConfig).forEach(function(field){
       filteredPosts = filterHelper[field](filteredPosts,filterConfig[field])
     });}
     return filteredPosts.slice(skip, skip +top).sort(this._compareByDate);
   }

   addAll (posts)
   {  let invalidPosts = new Array();
       posts.forEach(elem => {if(PostCollection.validate(elem))
        {  console.log("Post has been added")
          this.add(elem);}
        else invalidPosts.push(elem);});
        console.log("Invalid posts");
        return invalidPosts;
   }
  }

  let I = new PostCollection( photoPosts);
  // Tests
  //console.log(I.get("1"))
  
  //console.log(I.remove(6));
  
   //console.log(I.clear());
   
   //console.log(I.edit(3,{id:"3",description:"tree",author:"Mike",createdAt:new Date(),
   //photoLink:"https://avatars.mds.yandex.net",likes:["Sidorov"],hashTags:["#good"]}));
  
   //console.log(PostCollection.validate({id:"3",description:"abcd",author:"John",createdAt:new Date(),
   //photoLink:"https://avatars.mds.yandex.net/get",likes:["Ivanov","Petrov"], hashTags:["#rose","#red"]}));
 
  // console.log(I.add({id:"29",description:"tree",author:"Mike",createdAt:new Date(),
 //photoLink:"https://avatars.mds.yandex.net",likes:["Sidorov"],hashTags:["#good"]}));
 
 //console.log(I.getPage(0,10,{dateFrom:new Date("1996-02-16"), dateTo: new Date("2012-05-24"), hashtag: "#color"}))
 
 /*console.log(I.addAll([{
  id: '23',

  description: 'Водохранилище',

  createdAt: new Date('2015-02-04T17:41:00'),

  author: 'Petrov',

  photoLink: '',

  likes : ["Sidorov"],
  
  hashTags : ["#water","#sunny"]

 },
 {id: '44',

 description: 'Честная работа',

 createdAt: new Date('2007-08-04T22:48:00'),

 author: '',

 photoLink: 'https://www.1zoom.ru/big2/504/332983-zero.jpg',

 likes : ["Petrov"],
 
 hashTags : ["#hard","#work"]

},]
 ));*/
