export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="d-flex j-content-center a-items-center g-2">
            <button
                className="button button--outline-primary interactive--sm"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ← Anterior
            </button>

            {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <span key={`ellipsis-${index}`} className="text">...</span>
                ) : (
                    <button
                        key={page}
                        className={`button ${currentPage === page ? 'button--primary' : 'button--outline-primary'} interactive--sm`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                )
            ))}

            <button
                className="button button--outline-primary interactive--sm"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Siguiente →
            </button>
        </div>
    );
}