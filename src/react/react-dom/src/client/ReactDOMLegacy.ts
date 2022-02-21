import { isValidContainerLegacy } from "./ReactDOMRoot";

type React$Element = {} | any;
type React$Node = {};
type ReactEmpty = null | void | boolean;
type ReactNodeList = ReactEmpty | React$Node;
type Container = (Element & { _reactRootContainer: FiberRoot }) | Document & { _reactRootContainer: FiberRoot };
type FiberRoot = {}

export function render(
  element: React$Element,
  container: Container,
  callback?: Function
) {
  if (isValidContainerLegacy(element)) {
    throw new Error("目标容器不是一个DOM元素");
  }
  return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
}

export function legacyRenderSubtreeIntoContainer(
  parentComponent: React$Element,
  children: ReactNodeList,
  container: Container,
  forceHydrate: boolean,
  callback?: Function
) {
  let root = container._reactRootContainer;
  let fiberRoot: FiberRoot;
  if(!root){
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(container,false);
  }else{
    
  }
}

export function legacyCreateRootFromDOMContainer(container:Container,forceHydrate:boolean):FiberRoot{
  return {}
} 