class Entity {
  static URL = "";

  static list(data, callback) { // для получение информации
    createRequest({
      method: "GET",
      data,
      url: this.URL,
      callback,
    });
  }

  static patch(data, callback) { // для одновление информации 
    createRequest({
      method: "PATCH",
      data,
      url: this.URL,
      callback,
    });
  }

  static create(data, callback) { // для создания информации
    createRequest({
      method: "PUT",
      data,
      url: this.URL,
      callback,
    });
  }

  static remove(data, callback) { // для удаления информации 
    createRequest({
      method: "DELETE",
      data,
      url: this.URL,
      callback,
    });
  }
}
