function dateStr(time) {
  let storageDate = "",
    day = "",
    randomMin = "";
  randomMin = wx.getStorageSync("randomMin");
  storageDate = wx.getStorageSync("day");
  let t = (time && new Date(time)) || new Date();
  let y = t.getFullYear();
  let m = t.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = t.getDate();
  d = d < 10 ? "0" + d : d;
  let hms = t.toTimeString();
  hms = hms.split(" ")[0];
  day = `${y}-${m}-${d}`;
  if (storageDate != day) {
    wx.clearStorage();
    randomMin = Math.ceil(Math.random() * 59 + 1);
    randomMin = randomMin < 10 ? "0" + randomMin : randomMin;
    wx.setStorage({
      key: "day",
      data: day,
    });
    wx.setStorage({
      key: "randomMin",
      data: randomMin,
    });
  }

  return {
    now: `${m}-${d} ${hms}`,
    baoanLibraryTimeFormat: `${y}-${m}-${d} ${hms}`.slice(0, -3),
    examinationTime: `${y}-${m}-${d - 1} ${"22:" + randomMin}`,
  };
}
module.exports.dateStr = dateStr;
