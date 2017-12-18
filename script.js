

// Кнопка клика по иконке календаря, показывает и скрывает календарь.
let cb1 = function () {
 	let calendarMain = document.querySelector('#calendarMain').style.display;
 	let reminderName = document.querySelector('#reminderName');
 	let asideBarButton = document.querySelector('#asideBarButton');
 	if(calendarMain =='block'){
 		document.querySelector('#calendarMain').style.display='none';
 		setTimeout(function(){
 			reminderName.style.height = 360+'px';
 			asideBarButton.style.marginTop = 10+'px';
 			asideBarButton.style.transition = '.5s';
 			reminderName.style.transition = '.5s';
 			reminderName.style.overflowY = 'hidden';
 			console.log('ok')
 		}, 100)
 		

 	}else{
 		asideBarButton.style.marginTop = 240+'px';
 		asideBarButton.style.transition = '.3s';
 		reminderName.style.height = 130+'px';
 		reminderName.style.transition = '.3s';
 		reminderName.style.overflowY = 'scroll';
 		setTimeout(function(){
 			document.querySelector('#calendarMain').style.display='block';
 		}, 600);
 		//document.querySelector('#calendarMain').style.transform ='translateY(-10px)';
 		//document.querySelector('#calendarMain').style.transition ='all .9s';
 	} 	
}

let calendarButton = document.querySelector('#calendarButton');
calendarButton.addEventListener('click', cb1);

//клик по кнопке открывает и закрывает полле ввода нового листа

let cb2 = function() {
	let nameSpisok = document.querySelector('#nameSpisok').style.display;
	if(nameSpisok == 'block'){
		document.querySelector('#nameSpisok').style.display='none';
	}else{
		document.querySelector('#nameSpisok').style.display='block';
	}
}

let nameList = document.querySelector('#nameListDob');
nameList.addEventListener('click', cb2);


//Главная функция
let mainFun = function() {
	//массив с названиями событий и списком дел в событиях
	var spisokArr = [];
	if (localStorage.getItem('todo')!=undefined) {
		spisokArr = JSON.parse(localStorage.getItem('todo'));
	};
	

	// создаем массив по имени события и добавляем его в главный массив
	function element (e){

		//Удаляем ранее созданные кнопки при добавлении нового события
		let outSobChilTT = document.querySelector('#rn');
		let outSobChil = document.querySelector('#rn').children;	
		if(spisokArr.length<=10){
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i];
				let res2 = res.firstChild;
				
				if(res2){
					res2.remove();
				}
			}
		}else{
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i];
				let res2 = res.firstChild;
				if(res2){
					res2.remove();
				}
			}
			for(let i = 0; i < outSobChil.length; i++){
				i = 9;
				if(i<9){
			
				}else{
					outSobChil[i].remove();
				}
			}
		}
		// добавляем в массив новое событие
		let nameListValue = document.querySelector('#nameListValue').value;
		if(nameListValue.length>0){
			spisokArr.push(nameListValue);
		}
		//присваеваем полю ввода события изначальное положение
		document.querySelector('#nameListValue').value='';
		localStorage.setItem('todo', JSON.stringify(spisokArr));


		// вызываем фунцию создающую кнопку имени события и добавляем событие asideBar 
		//outSob();
	};

	let cb3 = function(e){
		let res = e.target;
		if(res.type == 'submit'){
			element();
			outSob();
		}
	}

	let nameListV = document.querySelector('#nameList');
	nameListV.addEventListener('click', cb3);

	// создаем кнопку имени события и добавляем событие asideBar
	function outSob (){
		let outSob = '';
		let outSobChil = document.querySelector('#rn').children;
		let outSobLength = document.querySelector('#rn');
		//определяем последний элемент списка событий
		let endChild = outSobChil[outSobChil.length - 1];
		if(spisokArr.length <= 9){
			for(let j = 0; j < spisokArr.length; j++){	
				for(let i = 0; i < outSobChil.length; i++){
					if(outSobChil[i].textContent.length==0){
						//Создаем блок в который будем добовлять кнопки события и удаления события
						let div = document.createElement('div');
						div.setAttribute('class', spisokArr[j]);
						let res = outSobChil[i];
						res.appendChild(div);
						// Создаем кнопку с названием события
						let buttonSob = document.createElement('button');
						buttonSob.setAttribute('class', spisokArr[j]+'buttonSob');
						buttonSob.innerHTML = spisokArr[j];
						div.appendChild(buttonSob)
						buttonSob.style.overflowX = 'scroll';
						buttonSob.style.overflowX = 'hidden';
						// создаем кнопку удаления события
						
						let buttonDel = document.createElement('button');
						buttonDel.setAttribute('class', 'buttonDel');
						buttonDel.innerHTML = 'х';
						let res2 = document.getElementsByClassName(`${spisokArr[j]}`)
						div.appendChild(buttonDel)

						break
					}
				}
			}
		// если длина списка событий больше 10 делаем scroll, создаем новый li и добавляе в массив
		} else if(spisokArr.length > 9){
			let reminderName = document.querySelector('#reminderName');
			for(let j = 0; j < spisokArr.length; j++){
				if(j <= 9)	{
					reminderName.style.overflowY = 'hidden';
					for(let i = 0; i < outSobChil.length; i++){
						if(outSobChil[i].textContent.length==0){
						//Создаем блок в который будем добовлять кнопки события и удаления события
						let div = document.createElement('div');
						div.setAttribute('class', spisokArr[j]);
						let res = outSobChil[i];
						res.appendChild(div);
						//Создаем кнопку с названием события
						let buttonSob = document.createElement('button');
						buttonSob.setAttribute('class', spisokArr[j]+'buttonSob');
						buttonSob.innerHTML = spisokArr[j];
						div.appendChild(buttonSob);
						buttonSob.style.overflowX = 'scroll';
						buttonSob.style.overflowX = 'hidden';
						// создаем кнопку удаления события
						let buttonDel = document.createElement('button');
						buttonDel.setAttribute('class', 'buttonDel');
						buttonDel.innerHTML = 'х';
						let res2 = document.getElementsByClassName(`${spisokArr[j]}`)
						div.appendChild(buttonDel);
							break
						}
					}
				}if (j>9){
					reminderName.style.overflowY = 'scroll';
					//Создаем блок и элемент спискав который будем добовлять кнопки события и удаления события
					let li = document.createElement('li');
					li.setAttribute('class', 'reminderNameCol');
					let div = document.createElement('div');
					div.setAttribute('class', spisokArr[j]);
					li.appendChild(div);
					// Создаем кнопку с названием события
					let buttonSob = document.createElement('button');
					buttonSob.setAttribute('class', spisokArr[j]+'buttonSob' );
					buttonSob.innerHTML = spisokArr[j];
					div.appendChild(buttonSob);
					outSobLength.appendChild(li);
					buttonSob.style.overflowX = 'scroll';
					buttonSob.style.overflowX = 'hidden';
					// создаем кнопку удаления события
						
					let buttonDel = document.createElement('button');
					buttonDel.setAttribute('class', 'buttonDel');
					buttonDel.innerHTML = 'х';
					let res2 = document.getElementsByClassName(`${spisokArr[j]}`)
					div.appendChild(buttonDel)
					//break
				}
			}
		}	
	}
	outSob();

	// определения события по которому был клик и удаление его из массива
	let cb4 = function(e){
		//debugger
		
		// определяем элемент по которому был клик и его родителя из dom дерева
		let res = e.target;
		if(res.type == 'submit'){
			//определяем класс кнопки по которой был клик
			let resClass = res.getAttribute('class');
			let resClassParent = res.parentNode.getAttribute('class');
			let itogResClass = resClassParent + 'buttonSob';
			let toDoListHeaderName = document.querySelector('.toDoListHeaderName');
			//делаем проверку и если это не кнопка удалить событие то присваеваем значение главному списку
			if(resClass==itogResClass){
				toDoListHeaderName.innerHTML = resClassParent;
				outDel();
			}else{
				//если это кнопка удалить, то удаляем событие
				//проверяем если название списка совпадает с тем значением, которое выбрано удаляем его
				let res2 = res.parentNode;
				let res2Class = res2.getAttribute('class');
				if(toDoListHeaderName.textContent==res2Class){
					toDoListHeaderName.innerHTML = '';
				}
				res2.remove();


				// определяем названия события и удаляем его из массива
				let znSob = res2.getAttribute('class');
				for(let i = 0; i < spisokArr.length; i++){
					console.log(i)
					if(znSob==spisokArr[i]){
						let end = i;
						spisokArr.splice(end, 1);
						localStorage.setItem('todo', JSON.stringify(spisokArr));
					}
				}

				//делаем проверку есть ли события у этого листа в массиве и если есть то удаляем дело из массива
				for(let i = 0; i < spisokArr.length; i++){
					for(let key in arrObj){
						console.log(arrObj)
						if(arrObj[key].todolist == znSob){
							//let end = key;
							arrObj.splice(key, 1);
							localStorage.setItem('todolist', JSON.stringify(arrObj));
						}
					}
				}

	

			element();
			outSob();
			outDel();
			}/*else{

			}*/
		}
	} 
	 
	var spisokSobytiy = document.querySelector('#rn');
	spisokSobytiy.addEventListener('click', cb4);

	// функция поиска события по названию

	let cb5 = function(){
		let arrSearch = [];
		
		let outSobChil = document.querySelector('#rn').children;
		let searchName = document.querySelector('#searchReminder').value;
		let outSobLength = document.querySelector('#rn');
		
		console.log(outSobChil.length)
		//проверка если массив arrSearch пустой, то загружаем spisokArr
		if(outSobChil.length){
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i].firstChild;
				if(res == null){
					outSob();
					break	
				}else{
					if(arrSearch.length<=10){
						for(let i = 0; i < outSobChil.length; i++){
						let res = outSobChil[i];
						let res2 = res.firstChild;
				
							if(res2){
								res2.remove();
							}
						}
					}else{
						for(let i = 0; i < outSobChil.length; i++){
							let res = outSobChil[i];
							let res2 = res.firstChild;
								if(res2){
									res2.remove();
								}
							}
						for(let i = 0; i < outSobChil.length; i++){
							i = 9;
							if(i<9){
			
							}else{
								outSobChil[i].remove();
							}
						}
					}
					outSob()
					break
				}
				break
			}
		}
		// Сравниваем данные из строки поиска с элементами списка
		try{for(let i = 0; i < outSobChil.length; i++){
			let res1 = document.querySelector('#searchReminder').value;
			console.log(res1);
			let res = outSobChil[i].firstChild.getAttribute('class');

			//let res1 = document.querySelector('#searchReminder').value;
			// определяем длину значения списка и введеного
			let res1l = res1.length;
			let itog = res.substring(0,res1l);
			if(itog == res1){
				arrSearch.push(res);
				console.log(arrSearch)
			}
		}}catch(e) {
			//console.log(e.message);
		} finally{
			//console.log('ошибка обработана')
		}
		//удаляем содержимое событий
		if(arrSearch.length<=10){
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i];
				let res2 = res.firstChild;
				
				if(res2){
					res2.remove();
				}
			}
		}else{
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i];
				let res2 = res.firstChild;
				if(res2){
					res2.remove();
				}
			}
			for(let i = 0; i < outSobChil.length; i++){
				i = 9;
				if(i<9){
			
				}else{
					outSobChil[i].remove();
				}
			}
		}

		if(searchName.length>0){
			//console.log(searchName.length)
			outSob();
		}
		if(searchName.length==0){
			arrSearch=spisokArr;
		}
		
		// удаляем содержимое массива spisokArr
		if(spisokArr.length<=10){
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i];
				let res2 = res.firstChild;
				
				if(res2){
					res2.remove();
				}
			}
		}else{
			for(let i = 0; i < outSobChil.length; i++){
				let res = outSobChil[i];
				let res2 = res.firstChild;
				if(res2){
					res2.remove();
				}
			}
			for(let i = 0; i < outSobChil.length; i++){
				i = 9;
				if(i<9){
			
				}else{
					try{outSobChil[i].remove();}
					catch(e){

					}finally{

					}
				}
			}
		}
		
		if(arrSearch.length <= 9){
			for(let j = 0; j < arrSearch.length; j++){	
				for(let i = 0; i < outSobChil.length; i++){
					if(outSobChil[i].textContent.length==0){
						//Создаем блок в который будем добовлять кнопки события и удаления события
						let div = document.createElement('div');
						div.setAttribute('class', arrSearch[j]);
						let ress = outSobChil[i];
						ress.appendChild(div);
						// Создаем кнопку с названием события
						let buttonSob = document.createElement('button');
						buttonSob.setAttribute('class', arrSearch[j]+'buttonSob');
						buttonSob.innerHTML = arrSearch[j];
						div.appendChild(buttonSob)
						buttonSob.style.overflowX = 'scroll';
						buttonSob.style.overflowX = 'hidden';
						// создаем кнопку удаления события
						
						let buttonDel = document.createElement('button');
						buttonDel.setAttribute('class', 'buttonDel');
						buttonDel.innerHTML = 'х';
						let res2 = document.getElementsByClassName(`${arrSearch[j]}`)
						div.appendChild(buttonDel)

						break
					}
				}
			}
		}else if(arrSearch.length > 9){
			let reminderName = document.querySelector('#reminderName');
			for(let j = 0; j < arrSearch.length; j++){
				if(j <= 9)	{
					for(let i = 0; i < outSobChil.length; i++){
						if(outSobChil[i].textContent.length==0){
						//Создаем блок в который будем добовлять кнопки события и удаления события
						let div = document.createElement('div');
						div.setAttribute('class', arrSearch[j]);
						let res = outSobChil[i];
						res.appendChild(div);
						//Создаем кнопку с названием события
						let buttonSob = document.createElement('button');
						buttonSob.setAttribute('class', arrSearch[j]+'buttonSob');
						buttonSob.innerHTML = arrSearch[j];
						div.appendChild(buttonSob)
						buttonSob.style.overflowX = 'scroll';
						buttonSob.style.overflowX = 'hidden';
						// создаем кнопку удаления события
						let buttonDel = document.createElement('button');
						buttonDel.setAttribute('class', 'buttonDel');
						buttonDel.innerHTML = 'х';
						let res2 = document.getElementsByClassName(`${arrSearch[j]}`)
						div.appendChild(buttonDel);
							break
						}
					}
				}if (j>9){
					reminderName.style.overflowY = 'scroll';
					//Создаем блок и элемент спискав который будем добовлять кнопки события и удаления события
					let li = document.createElement('li');
					li.setAttribute('class', 'reminderNameCol');
					let div = document.createElement('div');
					div.setAttribute('class', arrSearch[j]);
					li.appendChild(div);
					// Создаем кнопку с названием события
					let buttonSob = document.createElement('button');
					buttonSob.setAttribute('class', arrSearch[j]+'buttonSob' );
					buttonSob.innerHTML = arrSearch[j];
					div.appendChild(buttonSob);
					outSobLength.appendChild(li);
					buttonSob.style.overflowX = 'scroll';
					buttonSob.style.overflowX = 'hidden';
					// создаем кнопку удаления события
						
					let buttonDel = document.createElement('button');
					buttonDel.setAttribute('class', 'buttonDel');
					buttonDel.innerHTML = 'х';
					let res2 = document.getElementsByClassName(`${arrSearch[j]}`)
					div.appendChild(buttonDel)
					//break
				}
			}
		}	
	}
	let inputR = document.querySelector('#searchReminder');
	inputR.addEventListener('keyup', cb5);

	//let inputReminder = document.querySelector('#searchButton');
	//inputReminder.addEventListener('click', cb5);


	//клик по кнопке и добавление события в выбранный список
	let cb6 = function(){
		//проверям выбран ли список, в который необходимо добавить событие
		let nameSpis = document.querySelector('.toDoListHeaderName').textContent;
		let dobRem = document.querySelector('#newReminder').style.display;
		let sob = document.querySelector('#nri');
		let date = document.querySelector('#dateS');
		let time = document.querySelector('#timeS');

		if(nameSpis.length == 0){
			alert('Выбирете список');
		}else if(dobRem == 'block'){
			document.querySelector('#newReminder').style.display='none';
		}else{
			document.querySelector('#newReminder').style.display = 'block';
			document.querySelector('#remindMeButtonAdd').style.display = 'block';
			document.querySelector('#remindMeButtonShift').style.display = 'none';
			sob.value = '';
			date.value = '';
			time.value = '';
		}
		
	}

	let dobDelo = document.querySelector('#tdlhb');
	dobDelo.addEventListener('click', cb6);

	// Создаем массив в который будем добавлять объекты с делами
	var arrObj = [];
	if (localStorage.getItem('todolist')!=undefined) {
		arrObj = JSON.parse(localStorage.getItem('todolist'));
	};

	//создаем функцию которая по клику будет удалять событие из массива
	let cb8 = function(e){
		// определяем элемент по которому был клик
		let resMain = e.target;
		let resMainClass = resMain.getAttribute('class');
		
		if(resMainClass == 'shiftSobBut'){
			let dobRem = document.querySelector('#newReminder').style.display;
			//определяем элемент по которому был клик и если это перенос то активируем кнопку перенос события
			let addDel = document.querySelector('#remindMeButtonAdd').style.display;
			let shiftDel = document.querySelector('#remindMeButtonShift').style.display;
			//получаем доступ к полям ввода события
			let sob = document.querySelector('#nri');
			if(dobRem == 'block'){
				document.querySelector('#newReminder').style.display='none';
			}else{
				document.querySelector('#newReminder').style.display = 'block';
				document.querySelector('#remindMeButtonAdd').style.display = 'none';
				document.querySelector('#remindMeButtonShift').style.display = 'block';
				//определяем значение события и добавляем его в форму
				let znSob = resMain.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
				sob.value = znSob;
			}
			}else{
				//определяем элемент по которому был клик и его родительский элемент и соседний
				let res = e.target.parentNode;
				let res2 = res.nextElementSibling;
				// определяем знarr.splice(key, 1);ачение соседнего элемента
				let res3 = res2.textContent;
				//перебираем массив объектов
			for(let key in arrObj){
				if(arrObj[key].sob == res3){
					arrObj.splice(key, 1);
					outDel()
					localStorage.setItem('todolist', JSON.stringify(arrObj));
				}else{
	
				}
			}
		}	
	}
	let sobDelArr = document.querySelector('#toDoListSpisok');
	sobDelArr.addEventListener('click', cb8);
	
	
	//Добавляем новое событие в список
	let cb7 = function(){
		let newSob = document.querySelector('#nri').value;
		let nameSp = document.querySelector('.toDoListHeaderName').textContent;
		let date = document.querySelector('#dateS').value;
		let time = document.querySelector('#timeS').value;

		let temp = {};
		temp.todolist = nameSp;
		temp.sob = newSob;
		temp.date = date;
		temp.time = time; 
		let i = arrObj.length;
		arrObj[i] = temp;

		document.querySelector('#newReminder').style.display='none';
		outDel();
		localStorage.setItem('todolist', JSON.stringify(arrObj));
	}
	
	let buttonAdd = document.querySelector('#remindMeButtonAdd');
	buttonAdd.addEventListener('click', cb7);

	//перенос события
	let cb9 = function(){
		let newSob = document.querySelector('#nri').value;
		let nameSp = document.querySelector('.toDoListHeaderName').textContent;
		let date = document.querySelector('#dateS').value;
		let time = document.querySelector('#timeS').value;

		for(let key in arrObj){
			if(arrObj[key].sob == newSob){
				arrObj[key].todolist = nameSp;
				arrObj[key].sob = newSob;
				arrObj[key].date = date;
				arrObj[key].time = time;

			}
		}

		document.querySelector('#newReminder').style.display='none';
		outDel();
		localStorage.setItem('todolist', JSON.stringify(arrObj));
	}

	let buttonShift = document.querySelector('#remindMeButtonShift');
	buttonShift.addEventListener('click', cb9);

	//техн функция

	/*var arrTest = [];
	var arr =[];
	function sorti(){
		for(let i = 0; i < arrObj.length; i++){
			let bestDate = new Date()
			for(let key in arrObj){
				let res = arrObj[key].date;
				arrTest.push(res)
			}
			break
		}
		arrTest.sort()

		for(let i = 0; i < arrTest.length; i++){
			console.log(arrObj)
			console.log(arr)
			console.log(arrTest)
			for(let key in arrObj){
				if(arrTest[i] == arrObj[key].date){
					console.log(arrTest[i])
					console.log(arrObj[key])
					console.log(key)
					let res = arrObj[key];
					arr.push(res);
					console.log(res)
					console.log(arrObj);
					arrObj.splice(key, 1);
					console.log(arrObj)
					break
				}
			}
		}

		
		arrObj = arr;
		localStorage.setItem('todolist', JSON.stringify(arrObj));
	}
	sorti()*/


	function outDel(){
		// фильтр по датеж
		arrTest = [];
		arr =[];
		for(let i = 0; i < arrObj.length; i++){
			let bestDate = new Date()
			for(let key in arrObj){
				let res = arrObj[key].date;
				arrTest.push(res)
			}
			break
		}
		arrTest.sort()

		for(let i = 0; i < arrTest.length; i++){
			for(let key in arrObj){
				if(arrTest[i] == arrObj[key].date){
					let res = arrObj[key];
					arr.push(res);
					arrObj.splice(key, 1);
					break
				}
			}
		}

		
		arrObj = arr;

		let toDoSpisok = document.querySelector('#toDoListSpisok').children;
		let name = document.querySelector('.toDoListHeaderName').innerHTML;
		//делаем проверку заполнены строки и если да то удаляем
		if(arrObj.length <= 12){
			for(let i = 0; i < toDoSpisok.length; i++){
				let res = toDoSpisok[i].children;
				let res2 = res.length;
				if(res2 > 1){
					let res3 = toDoSpisok[i].lastChild;
					res3.remove();
				}
			}
		}else{
			for(let i = 0; i < toDoSpisok.length; i++){
				let res = toDoSpisok[i].children;
				let res2 = res.length;
				if(res2 > 1){
					let res3 = toDoSpisok[i].lastChild;
					res3.remove();
				}
				
			}
			
			for(let i = 0; i < toDoSpisok.length; i++){
				i = 12;
				if(i<12){
			
				}else{
					try{
						toDoSpisok[i].remove();
						i=0;
					}

					catch(e){

					}finally{

					}
				}
			}
		}
		
		//создаем переменную счетчик
		var k=0;
		//создаем и добавляем в массив объекты		
		for(let key in arrObj){
			let outDelo = '';
			let outTime = '';
			let outDate = '';
			let nameSp = '';
			nameSp = arrObj[key].todolist;
			outDelo += arrObj[key].sob;
			outDate += arrObj[key].date;
			outTime += arrObj[key].time;
			let len = arrObj.length;
			let tdlhb = document.querySelector('#toDoListSpisok');

			if(arrObj.length <= 12 && name === nameSp){
				tdlhb.style.overflowY = 'hidden';
				for(let i = 0; i < toDoSpisok.length; i++){
					if(i<len){
						let res = toDoSpisok[i].children;
						let res2 = toDoSpisok[i];
						if(res.length==1){
						//создаем блок который будем выводить в строку  
							let deloSt = document.createElement('div');
							deloSt.setAttribute('class', 'mainDelo');
							res2.appendChild(deloSt);
							// создаем кнопку удалить событие
							let strButton = document.createElement('div');
							strButton.setAttribute('class', 'strButton');
							deloSt.appendChild(strButton);
							let sb = document.createElement('button');
							sb.setAttribute('class', 'sb');
							sb.innerHTML = 'X';
							strButton.appendChild(sb);
							//создаем дочерний блок в который будем выводить названия события
							let strSob = document.createElement('div');
							strSob.setAttribute('class', 'strSob');
							strSob.innerHTML = outDelo;
							deloSt.appendChild(strSob);
							strSob.style.overflowX = 'scroll';
							strSob.style.overflowX = 'hidden';
							// создаем блок в который выводим дату события
							let strDate = document.createElement('div');
							strDate.setAttribute('class', 'strDate');
							strDate.innerHTML = outDate;
							deloSt.appendChild(strDate);
							// создаем дочерний блок в который выводим время
							let strTime = document.createElement('div');
							strTime.setAttribute('class', 'strTime');
							strTime.innerHTML = outTime;
							deloSt.appendChild(strTime);
							//создаем блок с кнопкой "перенос события"
							let shiftSob = document.createElement('div');
							shiftSob.setAttribute('class', 'shiftSob');
							deloSt.appendChild(shiftSob);
							let shiftSobBut = document.createElement('button');
							shiftSobBut.setAttribute('class', 'shiftSobBut');
							shiftSobBut.innerHTML = 'i';
							shiftSob.appendChild(shiftSobBut);
							break
						}
					}
				}
			//если длина списка больше 12
			} else if(arrObj.length > 12 && name === nameSp){
				for(let j = k; j < arrObj.length; j++){
					if(j<12){
						tdlhb.style.overflowY = 'hidden';
						for(let i = 0; i < toDoSpisok.length; i++){ 
							//если значение i меньше 12
							if(i<len){
								let res = toDoSpisok[i].children;
								let res2 = toDoSpisok[i];
								if(res.length==1){
									//создаем блок который будем выводить в строку  
									let deloSt = document.createElement('div');
									deloSt.setAttribute('class', 'mainDelo');
									res2.appendChild(deloSt);
									// создаем кнопку удалить событие
									let strButton = document.createElement('div');
									strButton.setAttribute('class', 'strButton');
									deloSt.appendChild(strButton);
									let sb = document.createElement('button');
									sb.setAttribute('class', 'sb');
									sb.innerHTML = 'X';
									strButton.appendChild(sb);
									//создаем дочерний блок в который будем выводить названия события
									let strSob = document.createElement('div');
									strSob.setAttribute('class', 'strSob');
									strSob.innerHTML = outDelo;
									deloSt.appendChild(strSob);
									strSob.style.overflowX = 'scroll';
									strSob.style.overflowX = 'hidden';
									// создаем блок в который выводим дату события
									let strDate = document.createElement('div');
									strDate.setAttribute('class', 'strDate');
									strDate.innerHTML = outDate;
									deloSt.appendChild(strDate);
									// создаем дочерний блок в который выводим время
									let strTime = document.createElement('div');
									strTime.setAttribute('class', 'strTime');
									strTime.innerHTML = outTime;
									deloSt.appendChild(strTime);
									//создаем блок с кнопкой "перенос события"
									let shiftSob = document.createElement('div');
									shiftSob.setAttribute('class', 'shiftSob');
									deloSt.appendChild(shiftSob);
									let shiftSobBut = document.createElement('button');
									shiftSobBut.setAttribute('class', 'shiftSobBut');
									shiftSobBut.innerHTML = 'i';
									shiftSob.appendChild(shiftSobBut);
									k++
									break
								}
							}
						//если значение i больше 12	
						} break
					} 
					if(j>10){
						tdlhb.style.overflowY = 'scroll';
						//создаем новый элемент типа li и добавляем его в список
						let li = document.createElement('li');
						li.setAttribute('class', 'tdlSpisok');
						tdlhb.appendChild(li);
						//создаем блок red line
						let redLine = document.createElement('div');
						redLine.setAttribute('class', 'redLine');
						li.appendChild(redLine);
						//создаем блок который будем выводить в строку  
						let deloSt = document.createElement('div');
						deloSt.setAttribute('class', 'mainDelo');
						li.appendChild(deloSt);
						// создаем кнопку удалить событие
						let strButton = document.createElement('div');
						strButton.setAttribute('class', 'strButton');
						deloSt.appendChild(strButton);
						let sb = document.createElement('button');
						sb.setAttribute('class', 'sb');
						sb.innerHTML = 'X';
						strButton.appendChild(sb);
						//создаем дочерний блок в который будем выводить названия события
						let strSob = document.createElement('div');
						strSob.setAttribute('class', 'strSob');
						strSob.innerHTML = outDelo;
						deloSt.appendChild(strSob);
						strSob.style.overflowX = 'scroll';
						strSob.style.overflowX = 'hidden';
						// создаем блок в который выводим дату события
						let strDate = document.createElement('div');
						strDate.setAttribute('class', 'strDate');
						strDate.innerHTML = outDate;
						deloSt.appendChild(strDate);
						// создаем дочерний блок в который выводим время
						let strTime = document.createElement('div');
						strTime.setAttribute('class', 'strTime');
						strTime.innerHTML = outTime;
						deloSt.appendChild(strTime);
						//создаем блок с кнопкой "перенос события"
						let shiftSob = document.createElement('div');
						shiftSob.setAttribute('class', 'shiftSob');
						deloSt.appendChild(shiftSob);
						let shiftSobBut = document.createElement('button');
						shiftSobBut.setAttribute('class', 'shiftSobBut');
						shiftSobBut.innerHTML = 'i';
						shiftSob.appendChild(shiftSobBut);
						break
					}
				}
			}
		}
	}
}	


window.addEventListener('load', mainFun);