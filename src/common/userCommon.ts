export const defaultPicture = "https://roquet-1322881756.cos.ap-guangzhou.myqcloud.com/user_avatar/10002/%E5%B8%A6%E9%A2%86%E6%88%91%E4%BB%AC%E8%BF%87%E4%B8%8A%E5%B9%B8%E7%A6%8F%E6%97%A5%E5%AD%90%E7%9A%84%E5%A4%A7%E4%BD%AC.jpg"

export const jsonParseTag = (usersList) => {
    usersList.forEach(user => {
        if (user.tags) {
            user.tags = user.tags ? JSON.parse(user.tags) : '该用户暂未设置';
        }
    })
}