import { BoxDirecciones } from "../components/BoxDirecciones"
import MapBox from "../components/MapBox"
import HorizontalNonLinearStepper from "../components/wizard"



export const NothingSelectedView2 = () => {
  return (
    <>
    <MapBox />
    <HorizontalNonLinearStepper />
    <BoxDirecciones />
    </>
    
  )
}
