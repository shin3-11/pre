const INSTAGRAM = {
    BUSINESS_ID: '100306188030855',
    LIMIT: 8,
    TOKEN: 'EAAQWQAQQI5IBAA6l6k16WKFP0aZAzyGUdWqdMjRE3D2zcK5RkJKCZBMJFMhsEaVsTsEOZAtA1zqPVkW5fHtjK3YANOTivwPW6w1KM5RIVi5tLPBlobFQhsIAEiwZCVJQGs3hhG3t22FSCVLQiI9XLcNXMniTfsvQzn1cYl64rAZDZD'
}



const { BUSINESS_ID, LIMIT, TOKEN } = INSTAGRAM

$.ajax({
    type: 'GET',
    url: `https://graph.facebook.com/v5.0/${BUSINESS_ID}?fields=name%2Cmedia.limit(${LIMIT})%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cmedia_type%2Cthumbnail_url%2Ctimestamp%2Cusername%7D&access_token=${TOKEN}`,
    dataType: 'json',
    success: (res) => {
        const { data } = res.data
    }
})