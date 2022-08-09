import React from 'react'

const MenuSection = ({ items, setMenuList }) => {
  return items.map((item, i) => (
              <div
                key={item.name}
                className=" flex flex-grow pl-4 p-2 ml-2 mb-3 hover:bg-gray-300   hover:rounded-full hover:cursor-pointer "
                onClick={() => {setMenuList(item.name)}}
              >
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  {item.name}
                </h2>

             
              </div>
            ))
  
}

export default MenuSection