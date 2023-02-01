
function App() {
  return (
    <>
      <Parent />
      <Wrapper />
    </>
  );
}

function Parent() {
  const users = [
    { name: "Nika", age: 18, lastName: "Germanishvili", id: 1 },
    { name: "Giorgi", age: 18, lastName: "Samkharadze", id: 2 },
  ];

  return <Child user={users} isUserLoggedIn={true} />;
}

function Child({user, isUserLoggedIn}) {
  // if (user.length === 0) {
  //   return <h2>No user in System</h2>;
  // }
  // if (isUserLoggedIn === false) {
  //   return <h2>are not authorized to see user list.</h2>;
  // }
  // return (
  //   <>
  //     {user.map((users) => {
  //       const { name, age, lastName, id } = users;
  //       return (
  //         <ul key={id}>
  //           {isUserLoggedIn ? (
  //             <li>{` NAME: ${name} AGE: ${age} LASTNAME: ${lastName}`}</li>
  //           ) : null}
  //         </ul>
  //       );
  //     })}
  //   </>
  // );
  return (
    <>
      {isUserLoggedIn ? (
        user.length > 0 ? (
          user.map((users) => {
            const { name, age, lastName, id } = users;
            return (
              <ul key={id}>
                {isUserLoggedIn ? (
                  <li>{` სახელი - ${name} ასაკი: ${age} გვარი - ${lastName}`}</li>
                ) : null}
              </ul>
            );
          })
        ) : (
          <h2>No users in the system</h2>
        )
      ) : (
        <h2>Are not authorized to see user List.</h2>
      )}
    </>
  );
}

const Wrapper = (prop) => {
  return (
    <div className="wrapper">
      <Navbar />
      {prop.children}
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navBar">
      <h2>Navbar</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
     <h2>Footer</h2>
    </div>
  );
};

export default App;
