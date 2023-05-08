import React, { useState } from "react";
import { useSelector } from "react-redux";
export const ProductCard = (props) => {
  const [edit, setEdit] = useState(false);
  const getUserId = useSelector((state) => state.post.userId);
  const [editProductState, setEditProductState] = useState({
    firstname: props.firstname,
    lastname: props.lastname,
    Bio: props.Bio,
    post: props.post,
  });
  const onChangeHandler = (e) => {
    setEditProductState({
      ...editProductState,
      [e.target.name]: e.target.value,
    });
  };

  const editProductFunc = () => {
    // full manual
    props.editProduct({
      key: props.key,
      id: props.id,
      title: editProductState.title,
      publisher: editProductState.publisher,
      genre: editProductState.genre,
      price: editProductState.price,
    });

    //assuming the state does not include key or id
    // prop.editProduct({
    //     key: props.key,
    //     id: props.id,
    //     ...editProductState
    // })

    // works only if all values are in the state (editProductState)
    props.editProduct(editProductState);
    setEdit(false);
  };

  return (
    <>
      {" "}
      {edit ? (
        <div className="m-1 bg-gray-500">
          <label htmlFor="firstname">Firstname </label>
          <input
            type="text"
            name="firstname"
            value={editProductState.firstname}
            onChange={onChangeHandler}
            className="file:border file:border-solid disabled:opacity-75"
          />
          <br />
          <label htmlFor="lastname">lastname: </label>
          <input
            type="text"
            name="lastname"
            value={editProductState.lastname}
            onChange={onChangeHandler}
            className="file:border file:border-solid disabled:opacity-75"
          />
          <br />
          <label htmlFor="Bio">Bio: </label>
          <input
            type="text"
            name="Bio"
            value={editProductState.Bio}
            onChange={onChangeHandler}
            className="file:border file:border-solid disabled:opacity-75"
          />
          <br />

          <button onClick={() => props.editProduct(editProductState)}>
            Save Changes
          </button>
        </div>
      ) : (
        <div className="rounded-lg flex flex-col m-1 bg-gray-500">
          {" "}
          <p>Firstname: {props.firstname}</p>
          <p>lastname: {props.lastname}</p>
          <p>Bio: ${props.Bio}</p>
          <p>Post:{props.post}</p>
        </div>
      )}
      <div className="m-1  bg-gray-500">
        {" "}
        <button
          name="Toggle Edit"
          value="Toggle Edit"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 border-b-1 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => setEdit(!edit)}
        >
          Toggle Edit
        </button>
      </div>
      <div className="bg-gray-500">
        {" "}
        <button
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-1 border-b-1 border-blue-700 hover:border-red-500 rounded"
          onClick={() => props.deleteProduct(props.id)}
        >
          Delete!
        </button>
      </div>
    </>
  );
};
