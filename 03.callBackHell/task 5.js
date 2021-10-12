function changeColor(time, color, callback, reject) {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 10);
    if (num > 5) {
      document.body.style.backgroundColor = color;
      callback();
    } else {
      reject();
    }
  }, time);
}

changeColor(
  1000,
  "red",
  () => {
    changeColor(
      1000,
      "green",
      () => {
        changeColor(
          1000,
          "blue",
          () => {
            changeColor(
              1000,
              "cyan",
              () => {
                changeColor(
                  1000,
                  "yellow",
                  () => {
                    changeColor(
                      1000,
                      "black",
                      () => {
                        changeColor(
                          1000,
                          "pink",
                          () => {},
                          () => {
                            console.log("your seventh callback was rejected ☹");
                          }
                        );
                      },
                      () => {
                        console.log("your sixth callback was rejected ☹");
                      }
                    );
                  },
                  () => {
                    console.log("your fifth callback was rejected ☹");
                  }
                );
              },
              () => {
                console.log("your fourth callback was rejected ☹");
              }
            );
          },
          () => {
            console.log("your third callback was rejected ☹");
          }
        );
      },
      () => {
        console.log("your second callback was rejected ☹");
      }
    );
  },
  () => {
    console.log("your first callback was rejected ☹");
  }
);
