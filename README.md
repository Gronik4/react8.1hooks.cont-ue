# "Continuous Deployment"  
блок React ДЗ №8.1(hooks-context) задача: useEffect. 

## 'Описание':  
Вы решили потренироваться в использовании хука useEffect и реализовать следующее приложение — список с пользователями, в котором при клике на пользователя рядом появляется окно, отображающее детальную информацию о нём.  
Необходимо реализовать следующую логику:  
1. При загрузке приложения один раз делается запрос по адресу https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json и отрисовывается список в компоненте List.
2. При клике на конкретный элемент списка в компонент Details передаётся один props: info (объект с полями id и name) и начинается загрузка данных по адресу: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, где {id} — это ID пользователя из props.
3. На время загрузки можете отображать индикатор загрузки. Протестируйте с помощью выставления ограничения пропускной способности сети в Dev Tools.  
### Важно: ###  
1. Вся загрузка должна происходить через хук useEffect. Подумайте, как организовать единоразовую загрузку и загрузку при каждом изменении props.info.id.
2. Обратите внимание, загрузка деталей должна происходить только при изменении props.info.id, а не при каждом рендере. То есть если на одного и того же пользователя кликнуть дважды, то загрузка произойдёт только в первый раз.

**Project Sample** [![Build status](https://ci.appveyor.com/api/projects/status/445ksf1c12l8bp0o?svg=true)](https://ci.appveyor.com/project/Gronik4/react8-1hooks-cont-ue) 

[Посмотреть результат](https://gronik4.github.io/react8.1hooks.cont-ue/)
