const experincePoints = require('../experience-point.json');
const axios = require('axios');
const cheerio = require('cheerio');

export async function getUser(name) {
  const res = await axios({
    method: 'GET',
    url: `https://maplestory.nexon.com/Ranking/World/Total?c=${encodeURI(
      name
    )}`,
  });

  let $ = cheerio.load(res.data);
  let td = $('tr.search_com_chk td');

  if (td.get(2)) {
    const avatar = td.get(1).children[0].next.children[0].next.attribs.src;
    const level = Number(td.get(2).children[0].data.replace('Lv.', ''));
    const experincePoint = parseInt(
      td.get(3).children[0].data.replace(/,/g, '')
    );
    const current = experincePoints.accumulate[level - 2] + experincePoint;
    const total = experincePoints.accumulate[273];
    return { avatar, current, total, level };
  }
}
