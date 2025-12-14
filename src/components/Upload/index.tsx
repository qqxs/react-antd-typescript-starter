import { useState, useCallback } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, message, Form } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface FormUploadProps {
  name: string;
}

/**
 *
 * @param fileList
 * @returns
 */
export function getUploadImageList(fileList: any): string[] {
  return fileList.map((item: any) => item.response.data.urls[0]);
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();

  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    void message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    void message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export const getFile = (e: any) => {
  logger.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

/**
 * @description 文件上传
 * @param {FormUploadProps} props
 * @returns
 */
const FormUpload = (props: FormUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = useCallback((info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // console.log(info.file.response)
      const res = info.file.response;
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, () => {
        setLoading(false);
        if (res.code === 0) {
          setImageUrl(res.data.urls[0] as string);
        }
      });
    }
  }, []);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined rev={undefined} /> : <PlusOutlined rev={undefined} />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form.Item rules={[{ required: true, message: '请上传头像!' }]} getValueFromEvent={getFile} valuePropName="fileList" {...props}>
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        maxCount={1}
        accept="image/png,image/jpeg,image/jpg">
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </Form.Item>
  );
};

export default FormUpload;
