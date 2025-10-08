import { toast } from "react-toastify";


const getStoredBook = ()=>{
    const storeBookSTR = localStorage.getItem("readlist");

    if(storeBookSTR){
          const storeBookdata = JSON.parse(storeBookSTR)
          return storeBookdata
    } else{
        return []
    }
}

const addItemStoreDB = (id)=>{
            
    const storeBookData = getStoredBook();
    if(storeBookData.includes(id)) {
        toast('Apps is already Installed');
        return;
    } else{
        storeBookData.push(id)
      
         const data = JSON.stringify(storeBookData);
         localStorage.setItem('readlist', data)
    }
}

const removeItemStoreDB = (id) => {
  const storeBookData = getStoredBook();

  const ConvertedId = parseInt(id)
  const remaining = storeBookData.filter((itemId) => parseInt(itemId) !== ConvertedId);
  localStorage.setItem("readlist", JSON.stringify(remaining));

  toast("App removed successfully", { position: "top-center" });
};

export{addItemStoreDB, getStoredBook, removeItemStoreDB}