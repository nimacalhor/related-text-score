const paragraph = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"


const textRelatedScore = function (p, str) {
    const repeatAmount = p.match(new RegExp(`${str}`, "gi"))?.length;
    return !repeatAmount ? 1 : repeatAmount >= 10 ? 10 : repeatAmount
}