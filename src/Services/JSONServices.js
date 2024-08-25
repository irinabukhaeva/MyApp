export default class JSONS {
  static async getData() {
    try {
      const resp = await fetch("http://localhost:3011/words");
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  static async addData(data) {
    try {
      await fetch("http://localhost:3011/words", {
        method: "POST",
        headers: {
          "Content-Type": "appication/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }
  }
  static async removeData(data) {
    console.log(data);
    try {
      await fetch(`http://localhost:3011/words/${data}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log(e);
    }
  }
}
