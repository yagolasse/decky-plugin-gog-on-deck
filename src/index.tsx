import {
  Button,
  definePlugin,
  Menu,
  MenuItem,
  ServerAPI,
  showModal,
  staticClasses,
} from "decky-frontend-lib";
import { VFC } from "react";
import { FaShip } from "react-icons/fa";

// interface AddMethodArgs {
//   left: number;
//   right: number;
// }

const Content: VFC<{ serverAPI: ServerAPI }> = ({}) => {
  // const [result, setResult] = useState<number | undefined>();

  // const onClick = async () => {
  //   const result = await serverAPI.callPluginMethod<AddMethodArgs, number>(
  //     "add",
  //     {
  //       left: 2,
  //       right: 2,
  //     }
  //   );
  //   if (result.success) {
  //     setResult(result.result);
  //   }
  // };

  return (
    <div>
      <Button
        onClick={(e) =>
          showModal(
            <Menu label="Menu" cancelText="CAAAANCEL" onCancel={() => {}}>
              <MenuItem onSelected={() => {}}>Item #1</MenuItem>
              <MenuItem onSelected={() => {}}>Item #2</MenuItem>
              <MenuItem onSelected={() => {}}>Item #3</MenuItem>
            </Menu>,
            e.currentTarget ?? window
          )
        }
      >
        Server says yolo
      </Button>
    </div>
  );
};

export default definePlugin((serverApi) => {
  return {
    title: <div className={staticClasses.Title}>Example Plugin</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaShip />,
  };
});
