// const h1 = document.createElement("h1");
// h1.innerHTML = "E-commerce Webpage";
// div.appendChild(h1);



// const div = document.getElementById("h1-js");

// const h1 = React.createElement("h1", {}, [
//   React.createElement("div", { id: "inner-div-01" }, [
//     React.createElement("span", {}, "1"),
//     React.createElement("span", {}, "2"),
//   ]),
//   React.createElement("div", { id: "inner-div-01" }, [
//     React.createElement("span", {}, "3"),
//     React.createElement("span", {}, "4"),
//   ])
// ]);

// const root = ReactDOM.createRoot(div);
// root.render(h1);

const div = document.getElementById("h1-js");

const h1 = (
  <h1 style={{
    width: "80%",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial"
  }}>

    <div style={{
      display: "inline-flex",
      gap: "20px",
      margin: "15px",
      padding: "20px",
      backgroundColor: "#eeeeee",
      borderRadius: "8px"
    }}>
      <span style={{
        padding: "15px 25px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
        1
      </span>

      <span style={{
        padding: "15px 25px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
        2
      </span>
    </div>

    <div style={{
      display: "inline-flex",
      gap: "20px",
      margin: "15px",
      padding: "20px",
      backgroundColor: "#eeeeee",
      borderRadius: "8px"
    }}>
      <span style={{
        padding: "15px 25px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
        3
      </span>

      <span style={{
        padding: "15px 25px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
        4
      </span>
    </div>

  </h1>
);

const root = ReactDOM.createRoot(div);

root.render(h1);