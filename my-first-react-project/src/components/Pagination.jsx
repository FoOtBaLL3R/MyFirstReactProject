//import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'


export default function Pagination({pages, page, paginate }) {


  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5; // Adjust as needed
    let startPage = Math.max(page - Math.floor(maxPageNumbersToShow / 2), 1);
    let endPage = startPage + maxPageNumbersToShow - 1;

    if (endPage > pages) {
      endPage = pages;
      startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <Box display="flex" justifyContent="center" mt="4">
      <ButtonGroup>
        <Button onClick={() => paginate(1)} isDisabled={page === 1}>
          First
        </Button>
        <Button onClick={() => paginate(page - 1)} isDisabled={page === 1}>
          Previous
        </Button>
        {getPageNumbers().map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            variant={pageNumber === page ? 'solid' : 'ghost'}
          >
            {pageNumber}
          </Button>
        ))}
        <Button onClick={() => paginate(page + 1)} isDisabled={page === pages}>
          Next
        </Button>
        <Button onClick={() => paginate(pages)} isDisabled={page === pages}>
          Last
        </Button>
      </ButtonGroup>
    </Box>
  );

}
