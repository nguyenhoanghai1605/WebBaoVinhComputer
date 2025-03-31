$(document).ready(function () {
    // Sản phẩm của bạn
    var products = [
        {
            name: "PC WORKSTATION DUAL AMD EPYC 7742: 256 THREADS | DUAL VGA",
            price: "1.050.000.000 đ",
            oldPrice: "1.855.000.000 đ",
            discount: "43%",
            imageSrc: "../image/hinh1.png",
            links: "../html/ChiTietSanPham.html"
        },
        {
            name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
            price: "38.180.000 đ",
            oldPrice: "51.855.000.000 đ",
            discount: "33%",
            imageSrc: "../image/hinh2.png",
            links: "../html/ChiTietSanPham.html"
        },
        {
            name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
            price: "38.840.000 đ",
            oldPrice: "58.840.000 đ",
            discount: "35%",
            imageSrc: "../image/hinh3.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P8",
            price: "58.840.000 đ",
            oldPrice: "71.855.000.000 đ",
            discount: "15%",
            imageSrc: "../image/hinh4.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X99-T8D/E3-2673/128G DDR3/PSU650/1SP P8",
            price: "1.250.000.000 đ",
            oldPrice: "1.955.000.000 đ",
            discount: "40%",
            imageSrc: "../image/hinh4.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X99/E3-2680/32G DDR3/PSU550/JT9605B",
            price: "50.900.000 đ",
            oldPrice: "65.900.000 đ",
            discount: "17%",
            imageSrc: "../image/hinh3.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X99/E3-2680/64G DDR3/PSU550/JT9605B",
            price: "58.900.000 đ",
            oldPrice: "75.900.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh3.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X79/E3-2670/32G DDR3/PSU550/JT9331",
            price: "60.900.000 đ",
            oldPrice: "75.350.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh3.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X79/E3-2670/64G DDR3/PSU550/JT9331",
            price: "65.950.000.000 đ",
            oldPrice: "81.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh3.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC WORKSTATION X79/E3-2670/128G DDR3/PSU550/JT9331",
            price: "69.950.000.000 đ",
            oldPrice: "91.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh3.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC Workstation T90 – Core i9 13900K | 64G | RTX3090 24GB | 2TB SSD",
            price: "66.900.000 đ",
            oldPrice: "81.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh5.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC Workstation T90 – Core i9 13900K | 128G | RTX3090 24GB | 2TB SSD",
            price: "69.900.000 đ",
            oldPrice: "85.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh5.png",
            links: "../html/ChiTietSanPham.html"
        },  
        {
            name: "PC Gaming STAR CHICKEN AQUA | RTX 3060TI, Intel | RTX3090 32GB | 2TB SSD ",
            price: "88.050.000.000 đ",
            oldPrice: "1.155.000.000 đ",
            discount: "35%",
            imageSrc: "../image/hinh6.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 32GB/ SSD 1TB/ 700W)",
            price: "75.900.000 đ",
            oldPrice: "90.890.000 đ",
            discount: "15%",
            imageSrc: "../image/hinh7.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 64GB/ SSD 1TB/ 700W)",
            price: "85.050.000.000 đ",
            oldPrice: "92.450.000 đ",
            discount: "11%",
            imageSrc: "../image/hinh8.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC Workstation Machine Learning VIP (5955WX/ WRX80E/ 128G/ 2TB/ 10TB HDD/ 4X RTX 4090/ 2000W)",
            price: "1.050.000.000 đ",
            oldPrice: "1.855.000.000 đ",
            discount: "43%",
            imageSrc: "../image/hinh9.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC - MACHINE LEARNING 03 (5995WX/ WRX80E/ 256GB RAM/ 20TB SSD/ 3X RTX 4090 O24G/ 2000W)",
            price: "564.540.000 đ",
            oldPrice: "679.540.000 đ",
            discount: "20%",
            imageSrc: "../image/hinh10.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC HOTGEAR AMD Ryzen 9 / Ryzen 9 7900X / MAIN B650/ DDR4 16GB / SSD 250GB M.2 NVME",
            price: "1.150.000.000 đ",
            oldPrice: "1.955.000.000 đ",
            discount: "40%",
            imageSrc: "../image/hinh11.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 128GB / SSD 2TB M.2 NVME",
            price: "2.250.000.000 đ",
            oldPrice: "2.555.000.000 đ",
            discount: "15%",
            imageSrc: "../image/hinh12.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 256GB / SSD 2TB M.2 NVME",
            price: "2.450.000.000 đ",
            oldPrice: "2.755.000.000 đ",
            discount: "15%",
            imageSrc: "../image/hinh14.png",
            links: "../html/ChiTietSanPham.html"
        },
        // Thêm các sản phẩm khác vào đây
    ];

    var currentPage = 1; // Trang hiện tại
    var productsPerPage = 12; // Số sản phẩm trên mỗi trang

    // Hiển thị danh sách sản phẩm ban đầu
    displayProducts(products.slice(0, productsPerPage));

    // Xử lý sự kiện khi người dùng nhấn nút "Lọc"
    $("#filter-button").click(function () {
        var keyword = $("#search-input").val().toLowerCase(); // Lấy từ khóa tìm kiếm
        var minPrice = parseFloat($("#min-price-input").val()); // Lấy giá tối thiểu
        var maxPrice = parseFloat($("#max-price-input").val()); // Lấy giá tối đa

        // Lọc sản phẩm dựa trên từ khóa và giá
        var filteredProducts = products.filter(function (product) {
            var productName = product.name.toLowerCase(); // Chuyển tên sản phẩm thành chữ thường
            var productPrice = parseFloat(product.price.replace(/[đ,\s]/g, '')); // Chuyển giá thành số

            // Kiểm tra xem sản phẩm có phù hợp với tiêu chí lọc không
            var nameMatch = productName.includes(keyword); // Kiểm tra tên sản phẩm
            var priceMatch = (isNaN(minPrice) || productPrice >= minPrice) &&
                (isNaN(maxPrice) || productPrice <= maxPrice); // Kiểm tra giá sản phẩm

            return nameMatch && priceMatch;
        });

        // Hiển thị danh sách sản phẩm sau khi lọc
        currentPage = 1; // Reset trang về trang đầu tiên
        displayProducts(filteredProducts.slice(0, productsPerPage)); // Hiển thị 10 sản phẩm đầu tiên
        updatePagination(filteredProducts.length); // Cập nhật phân trang
    });

    // Hàm hiển thị danh sách sản phẩm
    function displayProducts(productsToDisplay) {
        var $productContainer = $("#product-container");
        $productContainer.empty(); // Xóa danh sách sản phẩm hiện tại

        // Thêm sản phẩm vào danh sách
        productsToDisplay.forEach(function (product) {
            var productHtml = '<div class="col-md-3">' +
                '<img class="hinh" src="' + product.imageSrc + '" alt="' + product.name + '">' +
                '<div class="ten-san-pham fix-2-line">' + product.name + '</div>' +
                '<div class="gia-san-pham gia col-md-10 p-0"> ' + product.price + '</div>' +
                '<div class="gia-san-pham-cu gia col-md-10 p-0"> ' + product.oldPrice + '</div>' +
                '<div class="giam-gia col-md-2 p-0"> ' + product.discount + '</div>' +
                '<a class="xem-them-link" href="' + product.links + '">Xem Thêm</a>' + // Thêm nút "Xem thêm" với href link sản phẩm
                '</div>';

            $productContainer.append(productHtml);
        });

        // Gắn sự kiện click vào nút "Xem thêm"
        $(".xem-them-link").click(function (e) {
            e.preventDefault(); // Ngăn chặn mặc định hành vi khi click vào liên kết
            var url = $(this).attr("href"); // Lấy URL từ thuộc tính href
            window.location.href = url; // Chuyển hướng tới trang chi tiết sản phẩm
        });
    }

    // Hàm cập nhật phân trang
    function updatePagination(totalProducts) {
        var $pagination = $("#pagination");
        $pagination.empty(); // Xóa phân trang hiện tại

        var totalPages = Math.ceil(totalProducts / productsPerPage);

        if (totalPages > 1) {
            // Thêm nút "Trang đầu"
            $pagination.append('<span class="page">Đầu</span>');

            // Thêm các trang
            for (var i = 1; i <= totalPages; i++) {
                $pagination.append('<span class="page">' + i + '</span>');
            }

            // Thêm nút "Trang cuối"
            $pagination.append('<span class="page">Cuối</span>');

            // Sử dụng event delegation để xử lý sự kiện khi người dùng nhấn vào trang
            $pagination.on("click", ".page", function () {
                var pageText = $(this).text();
                if (pageText === "Đầu") {
                    currentPage = 1;
                } else if (pageText === "Cuối") {
                    currentPage = totalPages;
                } else {
                    currentPage = parseInt(pageText);
                }

                var startIndex = (currentPage - 1) * productsPerPage;
                var endIndex = startIndex + productsPerPage;
                displayProducts(products.slice(startIndex, endIndex));
            });
        }
    }
});
