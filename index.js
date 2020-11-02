// 获取tr标签列表
function getTagTr() {
    var tbodyList = document.getElementById('board-gird');
    var trList = tbodyList.getElementsByTagName('tr');
    return trList;
}
// 改变方块颜色
function changeColor(temp) {
    var tdCS = document.getElementById(temp);
    tdCS.style.backgroundColor = 'red';
}
// 给每个方块设置点击事件
function setEvent() {
    for (var i=0;i<13;i++) {
        for (var j=0;j<13;j++) {
            var tdID = 'td-btn'+i+'-'+j;
            document.getElementById(tdID).onclick = function () {changeColor(this.id);tdIsSuccess(this.id)};
        }
    }
}
// 给每个方块设置id
function setTdID() {
    var trList = getTagTr();
    for (var i=0;i<trList.length;i++) {
        for (var j=0;j<trList.length;j++) {
            var tdTemp = trList[i].getElementsByTagName("td")[j];
            tdTemp.id = 'td-btn'+i+'-'+j;
            tdTemp.className = 'td-style';
        }
    }
}
// 定义计分板存储扎装置
function scoreCard() {
    this.rowArr = [];
    this.columnArr = [];
    this.slashArr = [];
    this.backslashArr = [];
}
// 定义方向判断以及是否胜利
{
    // 解析并分离id
    function extractID(id) {
        var tempList = /\d+-\d+/.exec(id)[0].split('-');
        return tempList;
    }
    // 合并id
    function joinTdID(coorArr) {
        return 'td-btn'+coorArr.join('-');
    }
    // 获取id背景颜色
    function getTdBGC(id) {
        try{
            var color = document.getElementById(id).style.backgroundColor;
        }
        catch(error){
            console.log('可能超过界限');
        }
        return color;
    }
    // 向右判断
    function rowRightTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[1] = parseInt(coorArr[1]) + 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.rowArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    //右上判断
    function backSlashUpTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[1] = parseInt(coorArr[1]) + 1;
            coorArr[0] = parseInt(coorArr[0]) - 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.backslashArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    //向上判断
    function columnUpTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[0] = parseInt(coorArr[0]) - 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.columnArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    //左上判断
    function slashUpTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[0] = parseInt(coorArr[0]) - 1;
            coorArr[1] = parseInt(coorArr[1]) - 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.slashArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    //向左判断
    function rowLeftTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[1] = parseInt(coorArr[1]) - 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.rowArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    //左下判断
    function backSlashDownTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[1] = parseInt(coorArr[1]) - 1;
            coorArr[0] = parseInt(coorArr[0]) + 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.backslashArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    // 向下判断
    function columnDownTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[0] = parseInt(coorArr[0]) + 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.columnArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    // 右下判断
    function slashDownTeam(id,tScoreCrad) {
        var oldID = id;
        var tOrF = true;
        while(tOrF){
            var coorArr = extractID(oldID);
            coorArr[1] = parseInt(coorArr[1]) + 1;
            coorArr[0] = parseInt(coorArr[0]) + 1;
            var newID = joinTdID(coorArr);
            var oldIDColor = getTdBGC(oldID);
            var newIDColor = getTdBGC(newID);
            if (oldIDColor == newIDColor) {
                var length = tScoreCrad.slashArr.push(newID);
                // console.log(length);
                if (length >= 4) {
                    return tOrF = true;
                }else {
                    oldID = newID;
                    tOrF = true;
                }
            }else{
                return false;
            }
        }
    }
    // 判断输赢总控制
    function tdIsSuccess(id) {
        var tScoreCrad = new scoreCard();
        switch(1){
            case 1:{
                var successOrNot = rowRightTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 2:{
                var successOrNot = backSlashUpTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 3:{
                var successOrNot = columnUpTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 4:{
                var successOrNot = slashUpTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 5:{
                var successOrNot = rowLeftTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 6:{
                var successOrNot = backSlashDownTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 7:{
                var successOrNot = columnDownTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
            case 8:{
                var successOrNot = slashDownTeam(id,tScoreCrad);
                if (successOrNot) {
                    alert('success');
                    break;
                }
            }
        }
        
    }
}
// 页面加载完成后，进行的初始化
function initilize() {
    setTdID();
    setEvent();
}

