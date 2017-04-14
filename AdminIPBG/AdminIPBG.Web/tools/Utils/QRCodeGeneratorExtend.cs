using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QRCoder;

namespace AdminIPBG.tools.Utils
{
    public abstract class QRCodeGeneratorExtend
    {
        public static byte[] GenerateQRCode(string input)
        {
            QRCoder.QRCodeGenerator qrGenerator = new QRCoder.QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(input, QRCoder.QRCodeGenerator.ECCLevel.Q);
            BitmapByteQRCode qrCode = new BitmapByteQRCode(qrCodeData);
            return qrCode.GetGraphic(20);
        }
    }
}