import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  //apply compound component pattern

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
{
  /* <Modal.open opens="table">
    <Button>Show Table</Button>
  </Modal.open>
  <Modal.window name="table">
    <CreateCabinForm />
  </Modal.window> */
}

// const [isOpenModal, setIsOpenModal] = useState(false);
// return (
//   <div>
//     <Button onClick={() => setIsOpenModal((show) => !show)}>Add Cabin</Button>
//     {isOpenModal && (
//       <Modal onClose={() => setIsOpenModal(false)}>
//         <CreateCabinForm onCloseModel={() => setIsOpenModal(false)} />
//       </Modal>
//     )}
//   </div>
// );
export default AddCabin;
