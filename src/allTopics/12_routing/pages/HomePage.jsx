import { useApi } from "../../13_customHook/customhook"

const HomePage = () => {

  let data = useApi("https://dummyjson.com/users")

  console.log(data?.users);

  return (
    <div>
      <h1 className="text-center font-bold">HomePage</h1>

      {
        data?.users.map((user)=>{
          console.log(user);
          return (
            <div>
              <h1>Fullname : {user.firstName} {user.lastName}</h1>
            </div>
          )
          
        })
      }
    </div>
  )
}

export default HomePage