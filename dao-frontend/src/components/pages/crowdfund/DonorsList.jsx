import SideTableWrapper from "@/components/ui/SideTableWrapper"
import { getRandomInt } from "@/libs/dummy"
import { memo } from "react"
import truncateEthAddress from "truncate-eth-address"


const DonorsList = ({donors}) => {

    return (
        <div className="text-gray-70 bg-white rounded-md p-4 shadow-lg ">

            <h2 className="text-black text-xl md:text-2xl font-semibold mb-3">Donors</h2>

            <SideTableWrapper>

                <table class="w-full text-sm text-left text-gray-500">

                    <thead class="text-xs text-gray-900 uppercase">
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            donors.map((voter, index) => {
                                return (
                                    <tr key={index} className="bg-white">
                                        <td scope="row" className="font-medium text-gray-900 whitespace-nowrap">
                                            {truncateEthAddress(voter)}
                                        </td>
                                        <td className={`px-2`}>
                                            $ {getRandomInt(1, 100000)} USDC
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>

            </SideTableWrapper>

        </div>
    )
}

export default memo(DonorsList)