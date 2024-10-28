import FoundryInput from '@/components/FoundryInput/Component';
import FoundryTitle from '@/components/FoundryTitle/Component';
function Canvas() {
  return (
    <div className=" w-[386px] h-5/6 bg-white rounded p-2">
      <div className="m-3 border border-white p-3 rounded hover:border-gray-300">
        <div className="pointer-events-none">
          <FoundryTitle />
        </div>
      </div>
      <div className="m-3 border border-white p-3 rounded hover:border-gray-300">
        <div className="pointer-events-none">
          <FoundryInput />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
