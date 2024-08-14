"use client";

export default function InvoiceView() {
  return (
    <div className=" p-5 mt-10 ">
      <div className="rounded-md border border-gray-200 p-5 ">
        {/* title */}
        <div className=" flex items-center justify-between ">
          <h1 className=" text-3xl font-bold text-cyan-500 ">CareLife</h1>
          <div>
            <p>
              <span className="text-[16px] font-bold ">Order: </span>
              <span className=" text-[16px] text-gray-500 "> #d00124</span>
            </p>
            <p>
              <span className="text-[16px] font-bold ">Issued: </span>
              <span className=" text-[16px] text-gray-500 "> 20/05/2024</span>
            </p>
          </div>
        </div>

        <div className="flex w-full mt-10 justify-between">
          <div className="">
            <p className="text-xl font-bold ">Invoice From</p>
            <p className="text-[16px] mt-3 text-gray-500 font-[450] ">
              Dr. Milon Miah
            </p>
            <p className="text-[16px] text-gray-500 font-[450] ">
              506 Yellow House, New Market
            </p>
            <p className="text-[16px] text-gray-500 font-[450] ">
              Dhaka New Market
            </p>
          </div>
          <div className="">
            <p className="text-xl font-bold  ">Invoice To</p>
            <p className="text-[16px] mt-3 text-gray-500 font-[450] ">
              Sakil Sheikh
            </p>
            <p className="text-[16px] text-gray-500 font-[450] ">
              2014 Gazipur, Gazipur
            </p>
            <p className="text-[16px] text-gray-500 font-[450] ">
              Gazipur Sardar, Gazipur
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xl font-bold ">Payment Method</p>
          <p className="text-[16px] mt-3 text-gray-500 font-[450] ">
            Dabit Card
          </p>
          <p className="text-[16px] text-gray-500 font-[450] ">
            xxxxxxxxxx-54201
          </p>
          <p className="text-[16px] text-gray-500 font-[450] ">ICBC BANK</p>
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-[18px] font-[500] text-black ">
                    Description
                  </th>
                  <th className="text-[18px] font-[500] text-black ">
                    Quantity
                  </th>
                  <th className="text-[18px] font-[500] text-black ">Vat</th>
                  <th className="text-[18px] font-[500] text-black ">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>General consultation</th>
                  <td>1</td>
                  <td>$0</td>
                  <td>$120</td>
                </tr>

                <tr>
                  <th>Video Call booking</th>
                  <td>1</td>
                  <td>$0</td>
                  <td>$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-evenly ">
          <div className=""></div>
          <div className=" w-[20%] ml-[450px]  ">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-bold ">Subtotal :</p>
              <p>$420</p>
            </div>
            <div className=" mt-4 border-b mb-4 "></div>
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-bold ">Discount :</p>
              <p>-15%</p>
            </div>
            <div className=" mt-4 border-b mb-4 "></div>

            <div className="flex items-center justify-between">
              <p className="text-[16px] font-bold ">Total Amount :</p>
              <p>$380</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xl font-bold ">Other Information</p>
          <p className="text-[16px] text-gray-500 mt-4 font-[450] ">
            Thank you for choosing our services. We appreciate your business!.
            Please note that this invoice is generated electronically and does
            not require a signature
          </p>
        </div>
      </div>
    </div>
  );
}
