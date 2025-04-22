//오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와
// 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를
// 만든다.
// xxxxx초나 흘렀습니다. 시간을 소중히 씁시다^^
// xxxxx초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^


console.log(getSecondsToday() + '초나 흘렀습니다. 시간을 소중히 씁시다^^');
console.log(getSecondsToTomorrow() + '초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^');

function getSecondsToday() {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

function getSecondsToTomorrow() {
    return 86400 - getSecondsToday();
}

