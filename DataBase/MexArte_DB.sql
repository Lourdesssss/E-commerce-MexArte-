USE mexartedb;

-- -----------------------------------------------------
-- Table `usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(60) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido_pat` VARCHAR(45) NULL,
  `apellido_mat` VARCHAR(45) NULL,
  `calle` VARCHAR(45) NULL,
  `colonia` VARCHAR(45) NULL,
  `cp` VARCHAR(45) NULL,
  `numCasa` INT NULL,
  `ciudad` VARCHAR(45) NULL,
  `artista` TINYINT NOT NULL,
  `coleccionista` TINYINT NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrito` (
  `idCarrito` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `total` FLOAT NULL,
  `idUsuario` INT UNSIGNED NOT NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`idCarrito`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `coleccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `coleccion` (
  `idColeccion` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `coleccion` VARCHAR(45) NULL,
  `descripcion` VARCHAR(200) NULL,
  PRIMARY KEY (`idColeccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `obra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `obra` (
  `idObra` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` FLOAT NOT NULL,
  `imagen` VARCHAR(60) NOT NULL,
  `descripcion` VARCHAR(200) NULL,
  `idUsuario` INT UNSIGNED NOT NULL,
  `tamaño` VARCHAR(25) NOT NULL,
  `status` TINYINT NOT NULL,
  `idColeccion` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idObra`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pedido` (
  `idPedido` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NULL,
  `ciudad` VARCHAR(45) NULL,
  `cp` VARCHAR(45) NULL,
  `entidad_federativa` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `fecha_pedido` DATE NULL,
  `idCarrito` INT UNSIGNED NOT NULL,
  `estatus` TINYINT NULL,
  `total` FLOAT NULL,
  `subtotal` FLOAT NULL,
  PRIMARY KEY (`idPedido`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `telefono_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `telefono_usuario` (
  `idtelefonoUsuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idUsuario` INT UNSIGNED NOT NULL,
  `telefono` VARCHAR(45) NULL,
  PRIMARY KEY (`idtelefonoUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carrito_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carrito_items` (
  `idDetalleCarrito` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idCarrito` INT UNSIGNED NOT NULL,
  `idObra` INT UNSIGNED NOT NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`idDetalleCarrito`))
ENGINE = InnoDB;
