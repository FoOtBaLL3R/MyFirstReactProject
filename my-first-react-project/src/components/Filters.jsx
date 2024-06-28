import { Select, Input } from '@chakra-ui/react'

export default function Filters({filter, setFilter}) {
    return(
        <div className='flex flex-col gap-5'>
          Filters
          <Input placeholder='Search' onChange={(e) => setFilter({...filter, search: e.target.value })}/>
          <Select onChange={(e) => setFilter({...filter, sortOrder: e.target.value })}>
            <option value={"desc"}>New ones first</option>
            <option value={"asc"}>First the old ones</option>
          </Select>
        </div>
    )

}