import Controls from "./Controls"
import Materiel from "./materiel"
//编辑区域
function Edit() {
    return <div className="flex w-screen h-screen ">
        <Controls />
        <div className="flex-1">edit</div>
        <Materiel />
    </div>
}
export default Edit