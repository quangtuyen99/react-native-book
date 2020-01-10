-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2020 at 11:00 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `image`) VALUES
(1, 'category.jpg'),
(2, 'category1.jpg'),
(3, 'category2.jpg'),
(4, 'category3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `date_order` datetime NOT NULL DEFAULT current_timestamp(),
  `total` float NOT NULL DEFAULT 0,
  `note` text CHARACTER SET utf8 DEFAULT NULL,
  `status` tinyint(4) DEFAULT 0 COMMENT 'Trạng thái đơn hàng'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `id_customer`, `date_order`, `total`, `note`, `status`) VALUES
(58, 40, '2020-01-01 11:17:18', 90500, NULL, 0),
(59, 40, '2020-01-01 11:18:39', 90500, NULL, 0),
(60, 40, '2020-01-01 11:21:27', 90500, NULL, 0),
(61, 40, '2020-01-01 11:23:53', 60000, NULL, 0),
(62, 40, '2020-01-01 11:24:54', 60000, NULL, 0),
(63, 40, '2020-01-01 11:25:21', 67000, NULL, 0),
(64, 40, '2020-01-01 11:25:49', 45000, NULL, 0),
(65, 40, '2020-01-01 11:32:09', 47000, NULL, 0),
(66, 40, '2020-01-01 11:37:37', 43500, NULL, 0),
(67, 40, '2020-01-01 11:38:39', 94000, NULL, 0),
(68, 40, '2020-01-01 11:38:58', 180000, NULL, 0),
(69, 40, '2020-01-01 11:39:20', 315000, NULL, 0),
(70, 40, '2020-01-01 11:46:09', 181000, NULL, 0),
(71, 44, '2020-01-01 12:00:30', 204000, NULL, 0),
(72, 46, '2020-01-05 08:29:01', 137500, NULL, 0),
(73, 47, '2020-01-06 07:28:25', 94000, NULL, 0),
(74, 47, '2020-01-06 09:09:19', 43500, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bill_detail`
--

CREATE TABLE `bill_detail` (
  `id` int(11) NOT NULL,
  `id_bill` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` float DEFAULT 0 COMMENT 'Số lượng',
  `price` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill_detail`
--

INSERT INTO `bill_detail` (`id`, `id_bill`, `id_product`, `quantity`, `price`) VALUES
(85, 58, 1, 1, 43500),
(86, 58, 2, 2, 47000),
(87, 59, 1, 2, 43500),
(88, 59, 2, 2, 47000),
(89, 60, 1, 2, 43500),
(90, 60, 2, 2, 47000),
(91, 61, 3, 2, 60000),
(92, 62, 3, 2, 60000),
(93, 63, 5, 2, 67000),
(94, 64, 6, 5, 45000),
(95, 65, 2, 2, 47000),
(96, 66, 1, 2, 43500),
(97, 67, 2, 2, 47000),
(98, 68, 3, 3, 60000),
(99, 69, 2, 3, 47000),
(100, 69, 1, 4, 43500),
(101, 70, 1, 2, 43500),
(102, 70, 2, 2, 47000),
(103, 71, 8, 2, 67000),
(104, 71, 9, 1, 70000),
(105, 72, 2, 2, 47000),
(106, 72, 1, 1, 43500),
(107, 73, 2, 2, 47000),
(108, 74, 1, 1, 43500);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `link` varchar(100) CHARACTER SET utf8 NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `link`, `id_product`) VALUES
(1, '1.jpg', 1),
(2, '2.jpg', 2),
(3, '3.jpg', 3),
(4, '4.jpg', 4),
(5, '5.jpg', 5),
(6, '6.jpg', 6),
(7, '7.jpg', 7),
(8, '8.jpg', 8),
(9, '9.jpg', 9);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `price` float DEFAULT 0,
  `p_company` varchar(30) DEFAULT NULL COMMENT 'Nhà xuất bản',
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `p_company`, `description`) VALUES
(1, 'Nhà Giả Kim', 43500, 'Nhã Nam', 'Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.\r\n\r\nTiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.\r\n\r\n“Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ. Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là,’ ông nghĩ.”\r\n\r\n- Trích Nhà giả kim'),
(2, 'Đắc Nhân Tâm', 47000, 'Tổng Hợp TP.HCM', 'Hiện nay có một sự hiểu nhầm đã xảy ra. Tuy Đắc Nhân Tâm là tựa sách hầu hết mọi người đều biết đến, vì những danh tiếng và mức độ phổ biến, nhưng một số người lại “ngại” đọc. Lý do vì họ tưởng đây là cuốn sách “dạy làm người” nên có tâm lý e ngại. Có lẽ là do khi giới thiệu về cuốn sách, người ta luôn gắn với miêu tả đây là “nghệ thuật đối nhân xử thế”, “nghệ thuật thu phục lòng người”… Những cụm từ này đã không còn hợp với hiện nay nữa, gây cảm giác xa lạ và không thực tế.'),
(3, 'Trên Đường Băng', 60000, 'NXB Trẻ', '\"Khi còn trẻ, hãy ra ngoài nhiều hơn ở nhà. Hãy nhào vô xin người khác “bóc hết, lột sạch” khả năng của mình. Chỉ sợ bất tài nộp hồ sơ “xin việc”, mà chả ai thèm cho, chả ai thèm bóc lột. Khi đã được bóc và lột hết, dù sau này đi đâu, làm gì, bạn đều cực kỳ thành công. Vì năng lực được trui rèn trong quá trình làm cho người khác. Sự chăm chỉ, tính kỷ luật, quen tay quen chân, quen ngáp, quen lười… cũng từ công việc mà ra. Mọi ông chủ vĩ đại đều từng là những người làm công ở vị trí thấp nhất. Họ đều rẽ trái trong khi mọi người rẽ phải. Họ có những quyết định không theo đám đông, không cam chịu sống một cuộc đời tầm thường, nhạt nhòa… rồi chết.\r\n\r\nCòn những bạn thu nhập 6 triệu cũng túng thiếu, 20 triệu cũng đi vay mượn để tiêu dùng, thì thôi, cuộc đời họ chấm dứt giấc mơ lớn. Tiền nong cá nhân quản lý không được, thì làm sao mà quản trị tài chính một cơ nghiệp lớn?”. Tư duy thế nào thì nó ra số phận thế đó.\"\r\n\r\n(Tony buổi sáng)\r\n\r\nTrên đường băng là tập hợp những bài viết được ưa thích trên Facebook của Tony Buổi Sáng. Nhưng khác với một tập tản văn thông thường, nội dung các bài được chọn lọc có chủ đích, nhằm chuẩn bị về tinh thần, kiến thức…cho các bạn trẻ vào đời. Sách gồm 3 phần: “Chuẩn bị hành trang”, “Trong phòng chờ sân bay” và “Lên máy bay”, tương ứng với những quá trình một bạn trẻ phải trải qua trước khi “cất cánh” trên đường băng cuộc đời, bay vào bầu trời cao rộng.\r\n\r\nNhững bài viết của Tony sinh động, thiết thực, hài hước và xuất phát từ cái tâm trong sáng của một người đi trước nhiều kinh nghiệm. Anh viết về thái độ với sự học và kiến thức nói chung, cách ứng phó với những trắc trở thử thách khi đi làm, cách sống hào sảng nghĩa tình văn minh…truyền cảm hứng cho các bạn trẻ sống hết mình, trọn vẹn từng phút giây. Tuy đối tượng độc giả chính mà cuốn sách hướng đến là các bạn trẻ, nhưng độc giả lớn tuổi hơn vẫn có thể đọc sách để hiểu và có cách hỗ trợ con em mình một cách đúng đắn, chứ không “ủ” con quá kỹ để rồi tạo ra một thế hệ yếu ớt, không biết tự lập. Những người đi làm nhiều năm đọc sách cũng có thể nhìn lại con đường đi của mình, tự ngẫm đó đã phải là con đường mình muốn đi chưa, bởi thay đổi không bao giờ là quá muộn.'),
(4, 'Mắt Biếc', 50000, 'NXB Trẻ', 'Mắt biếc là một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn Nguyễn Nhật Ánh. Tác phẩm này cũng đã được dịch giả Kato Sakae dịch sang tiếng Nhật để giới thiệu với độc giả Nhật Bản. \r\n\r\n“Tôi gửi tình yêu cho mùa hè, nhưng mùa hè không giữ nổi. Mùa hè chỉ biết ra hoa, phượng đỏ sân trường và tiếng ve nỉ non trong lá. Mùa hè ngây ngô, giống như tôi vậy. Nó chẳng làm được những điều tôi ký thác. Nó để Hà Lan đốt tôi, đốt rụi. Trái tim tôi cháy thành tro, rơi vãi trên đường về.”\r\n\r\n… Bởi sự trong sáng của một tình cảm, bởi cái kết thúc buồn, rất buồn khi xuyên suốt câu chuyện vẫn là những điều vui, buồn lẫn lộn …  '),
(5, 'Dám Bị Ghét', 67000, 'NXB Lao Động', 'Các mối quan hệ xã hội thật mệt mỏi.\r\n\r\nCuộc sống sao mà nhạt nhẽo và vô nghĩa.\r\n\r\nBản thân mình xấu xí và kém cỏi.\r\n\r\nQuá khứ đầy buồn đau còn tương lai thì mờ mịt.\r\n\r\nYêu cầu của người khác thật khắc nghiệt và phi lý.\r\n\r\nTẠI SAO BẠN CỨ PHẢI SỐNG THEO KHUÔN MẪU NGƯỜI KHÁC ĐẶT RA?\r\n\r\nDưới hình thức một cuộc đối thoại giữa Chàng thanh niên và Triết gia, cuốn sách trình bày một cách sinh động và hấp dẫn những nét chính trong tư tưởng của nhà tâm lý học Alfred Adler, người được mệnh danh là một trong “ba người khổng lồ của tâm lý học hiện đại”, sánh ngang với Freud và Jung. Khác với Freud cho rằng quá khứ và hoàn cảnh là động lực làm nên con người ta của hiện tại, Adler chủ trương “cuộc đời ta là do ta lựa chọn”, và tâm lý học Adler được gọi là “tâm lý học của lòng can đảm”.\r\n\r\nBạn bất hạnh không phải do quá khứ và hoàn cảnh, càng không phải do thiếu năng lực. Bạn chỉ thiếu “can đảm” mà thôi. Nói một cách khác, bạn không đủ “can đảm để dám hạnh phúc”. [] Bởi can đảm để dám hạnh phúc bao gồm cả “can đảm để dám bị ghét” nữa. [] Chỉ khi dám bị người khác ghét bỏ, chúng ta mới có được tự do, có được hạnh phúc.'),
(6, 'Cà Phê Tony', 45000, 'NXB Trẻ', 'Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường.\r\n\r\nChúng tôi tin rằng những người trẻ tuổi luôn mang trong mình khát khao vươn lên và tấm lòng hướng thiện, và có nhiều cách để động viên họ biến điều đó thành hành động. Nếu như tập sách nhỏ này có thể khơi gợi trong lòng bạn đọc trẻ một cảm hứng tốt đẹp, như tách cà phê thơm vào đầu ngày nắng mới, thì đó là niềm vui lớn của tác giả Tony Buổi Sáng.\r\n\r\nTony Buổi Sáng cũng là tác giả của Trên đường băng, tác phẩm hiện đã bán hơn 200.000 bản.'),
(7, 'Tôi Tự Học', 43000, 'NXB Trẻ', 'Sách “Tôi tự học” của tác giả Nguyễn Duy Cần đề cập đến khái niệm, mục đích của học vấn đối với con người đồng thời nêu lên một số phương pháp học tập đúng đắn và hiệu quả. Tác giả cho rằng giá trị của học vấn nằm ở sự lĩnh hội và mở mang tri thức của con người chứ không đơn thuần thể hiện trên bằng cấp. Trong xã hội ngày nay, không ít người quên đi ý nghĩa đích thực của học vấn, biến việc học của mình thành công cụ để kiếm tiền nhưng thực ra nó chỉ là phương tiện để  đưa con người đến thành công mà thôi. Bởi vì học không phải để lấy bằng mà học còn để “biết mình” và để “đối nhân xử thế”.\r\n\r\nCuốn sách này tuy đã được xuất bản từ rất lâu nhưng giá trị của sách vẫn còn nguyên vẹn. Những tư tưởng, chủ đề của sách vẫn phù hợp và có thể áp dụng trong đời sống hiện nay. Thiết nghĩ, cuốn sách này rất cần cho mọi đối tượng bạn đọc vì không có giới hạn nào cho việc truy tầm kiến thức, việc học là sự nghiệp lâu dài của mỗi con người. Đặc biệt, cuốn sách là một tài liệu quý để các bạn học sinh – sinh viên tham khảo, tổ chức lại việc học của mình một cách hợp lý và khoa học. Các bậc phụ huynh cũng cần tham khảo sách này để định hướng và tư vấn cho con em mình trong quá trình học tập.'),
(8, 'Nuôi Con ', 67000, 'Lao Động', 'Bạn đã được làm mẹ, được ôm trên tay sinh linh bé bỏng của mình. Hẳn bạn đang rất băn khoăn và trăn trở với hàng ngàn thắc mắc: làm thế nào để giúp bé làm quen với gia đình, bắt nhịp với cuộc sống mới lạ bên ngoài, làm thế nào để hiểu và đáp ứng đúng những nhu cầu của em bé sơ sinh chỉ mới biết dùng tiếng khóc làm công cụ duy nhất để giao tiếp đây. Những câu hỏi cứ liên tiếp nảy ra, bạn cuống cuồng tìm sự trợ giúp và giải đáp từ nhiều nguồn khác nhau, để rồi dễ dàng rơi vào một vòng xoáy sai lầm và một cuộc chiến mệt mỏi trong sự nghiệp nuôi con nhỏ.\r\n\r\nNhững ngày đầu tiên bạn sẽ cố gắng cho bé bú liên tục, nhằm kích sữa, để con biết đây là mẹ. Đôi khi bạn sẽ đánh thức con dậy để cho con bú khi thấy bé ngủ li bì vì bạn sợ lâu quá con không bú sẽ bị đói. Bạn liên tục tự hỏi: con bú ít thế có đói không? Mình làm như thế có sao không? Con có ngủ được không? Con có nóng không? Con có lạnh không? Và làm thế nào để con tăng cân nhanh nhất có thể. Con tăng cân thế có chậm so với anh, chị, em hay con nhà hàng xóm không?'),
(9, 'Tôi Không Thích', 70000, 'Nhà Xuất Bản Hà Nội', 'Đại bàng một mình bay lượn trên những tầng mây, lũ gà thì kêu quang quác dưới mặt đất.\r\nNhững tờ tiền giấy nhẹ bẫng nhưng mua được nhiều thứ hơn đống tiền xu leng keng.\r\nNhững người giản dị và khiêm tốn tạo ra nhiều giá trị xã hội hơn những kẻ ba hoa.\r\n\r\nỒn ào là âm thanh của cuộc sống hiện đại tôn sùng vật chất và hư danh. Sống giữa ồn ào, con người khó mà tĩnh lặng. Khi tâm trí xao động, hỗn loạn, con người sẽ dễ dàng nổi nóng, đưa ra những quyết định sai lầm, dễ sinh bệnh tật, tự tổn thương chính mình.\r\n\r\nVậy thì, hãy tự cho bản thân những giây phút lặng yên để:\r\nHít sâu và thở chậm - để cảm nhận sự hiện diện của thực tại, để không lạc lối vì mải chạy theo những điều phù phiếm.\r\nĐọc thật chậm và chiêm nghiệm những câu chữ đẹp đẽ - để có tư duy sâu sắc và sự đồng cảm đáng quý hơn khi chỉ đọc qua loa vài dòng status trên mạng.\r\nÔm lấy cơ thể và lắng nghe trái tim mình - để thấu hiểu và yêu thương bản thân nhiều hơn, để không bỏ mặc chính mình vì không biết “tôi là ai”.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `address`, `phone`) VALUES
(39, 'tuyen9', '0cc175b9c0f1b6a831c399e2697726', 'a', '190 Linh Trung', '1234'),
(40, 'tuyen', '202cb962ac59075b964b07152d234b', 'quang tuyen', '190 Linh Trung', '1234'),
(43, 'tuyenasd', '202cb962ac59075b964b07152d234b', 'tuyenabc', '190 Linh Trung', '1234'),
(44, 'tuyendef', '202cb962ac59075b964b07152d234b', 'tuyen123', '190 Linh Trung', '123456'),
(46, 'tuyen1', '202cb962ac59075b964b07152d234b', 'tuyen', '190 Linh Trung', '123'),
(47, 'asd', '202cb962ac59075b964b07152d234b', 'tuyen', '123', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_customer` (`id_customer`);

--
-- Indexes for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bill` (`id_bill`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `bill_detail`
--
ALTER TABLE `bill_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`id_customer`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `bill_detail_ibfk_1` FOREIGN KEY (`id_bill`) REFERENCES `bill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bill_detail_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
