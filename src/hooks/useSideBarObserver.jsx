import { useCallback, useRef } from "react";
import { useSideBarDispatch } from "../context/SideBarContext";
import useObserver from "./useObserver";

/**
 * @callback callback
 * @param {boolean} isIntersecting Boolean flag which indicates if the node is in the view
 * @returns {void}
 */
/**
 * @callback subscribe Method to subscribe a node
 * @param {RefType} ref Node reference
 * @returns {void}
 */

/**
 * useSideBarObserver allow side bar elements to be observed
 * @constructor
 * @param {string} label The label of the side bar element
 * @param {callback} [callback] The callback invoked in the observer
 * @returns {subscribe} Method to subscribe a node
 */
const useSideBarObserver = (label, callback) => {
  const nodeRef = useRef(null);
  const setSideBarValue = useSideBarDispatch();

  const observerCallback = useCallback(
    (isIntersecting) => {
      callback && callback(isIntersecting);
      isIntersecting && setSideBarValue(label);
    },
    [callback, label, setSideBarValue]
  );

  useObserver(nodeRef, observerCallback);

  const subscribe = useCallback((ref) => {
    nodeRef.current = ref;
  }, []);

  return subscribe;
};

export default useSideBarObserver;
