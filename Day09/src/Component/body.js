import { useEffect, useState } from "react";

function Body() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState("");

  async function generateProfile(count) {
    const random = Math.floor(Math.random() * 10000 + 1);
    const response = await fetch(
      `https://api.github.com/users?since=${random}&per_page=${count}`,
    );
    const data = await response.json();

    setProfile(data);
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  return (
    <div className="button">
      <input
        type="number"
        className="inpu"
        placeholder="Search here"
        value={numberofProfile}
        onChange={(e) => setnumberofProfile(e.target.value)}
      ></input>
      <button
        className="sub"
        onClick={() => generateProfile(Number(numberofProfile))}
      >
        Search Profiles
      </button>
      {/* Profile view */}
      <div className="profiles">
        {Profile.map((value) => {
          return (
            <div key={value.id} className="cards">
              <img src={value.avatar_url} alt="avatar" />
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank" rel="noreferrer">
                Profile
              </a>
            </div>
          );
        })}
      </div>
      //{" "}
    </div>
  );
}

export default Body;

// Try catch functionality add karo
// use call back function add krne ki koshish kro
// add search button on the basis of user name, if exist display

// ++++++++++++++++++ Notes For Revise ++++++++++++++++++++++++

/*
IMPORTANT NOTES (React Controlled Input)

1️⃣ value={state}
   → Makes input a CONTROLLED COMPONENT.
   → React controls the input value.

2️⃣ onChange={(e) => setState(e.target.value)}
   → onChange gives event object (e).
   → e.target.value = current input value.
   → setState updates the state.
   → State change → Component re-renders.

3️⃣ Always wrap function inside arrow:
   onChange={(e) => ...}
   ❌ Never write: onChange={setState(...)}

4️⃣ Do NOT use semicolon inside JSX arrow:
   ❌ onChange={(e) => setState(e.target.value);}
   ✅ onChange={(e) => setState(e.target.value)}

5️⃣ type="number" still gives STRING.
   Convert using Number() if needed.

REMEMBER:
UI = Function(State)
If state changes → UI updates automatically.
*/

/*
==============================
ARROW FUNCTION + JSX RULES
==============================

1️⃣ Arrow Function Types:

A) Implicit Return (NO {})
   Use when there is ONE expression.

   () => generateProfile(10)
   () => <div>Hello</div>

   ✅ Automatically returns value
   ❌ Cannot write multiple statements

-----------------------------------

B) Block Body (WITH {})
   Use when there are multiple statements.

   () => {
       console.log("clicked");
       generateProfile(10);
   }

   ⚠ Must use "return" if returning something:

   () => {
       return <div>Hello</div>;
   }

-----------------------------------

2️⃣ JSX RULE:

Inside JSX:
   {} means "JavaScript starts here"

Example:
   <div>{profile.map(...)}</div>

Without {} → React treats it as plain text.

-----------------------------------

3️⃣ map() RULE:

If using {} inside arrow:
   profile.map((value) => {
       return <div>{value}</div>;
   })

If using () instead:
   profile.map((value) => (
       <div>{value}</div>
   ))

-----------------------------------

4️⃣ EVENT HANDLER RULE:

❌ Wrong:
   onClick={generateProfile(10)}

✔ Correct:
   onClick={() => generateProfile(10)}

Because React needs FUNCTION REFERENCE,
not function call.

-----------------------------------

5️⃣ SIMPLE MEMORY TRICK:

Single expression → use ()
Multiple statements → use {} + return

-----------------------------------

FINAL GOLDEN RULE:

()  → auto return
{}  → manual return
{} in JSX → JavaScript mode
*/
