import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SketchPicker } from 'react-color';
import { useStore } from '@hooks/useStore';
import { Box, Grid } from '@mui/material';
import state from '@store/index';
import { baseTransition } from '@helpers/motion';
import { CustomPopover } from '@components/CustomPopover';
import ColorPickerImg from '@assets/customizer/color-picker.png';
import UploadFilePng from '@assets/customizer/upload-file.png';
import { FilePond } from 'react-filepond';
import { FilePondFile, registerPlugin } from 'filepond';
import { useStyles } from './Customizer.styles';
import {
  // editor
  openEditor,
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  processImage,

  // plugins
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_finetune,
  plugin_finetune_locale_en_gb,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_locale_en_gb,
  plugin_filter_defaults,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
} from '@pqina/pintura';

import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import { convertFileToString } from '@helpers/helpers';
registerPlugin(FilePondPluginImageEditor, FilePondPluginFilePoster);
setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

export const Customizer = () => {
  const store = useStore();
  const styles = useStyles();

  const [files, setFiles] = useState<FilePondFile[]>([]);

  useEffect(() => {
    if (files.length === 0) return;
    convertFileToString(files[0].file).then((result) => {
      state.controllers.imgFromUpload = result;
    });
  }, [files]);

  return (
    <AnimatePresence>
      <motion.div
        {...{
          initial: { position: 'absolute', left: 0, top: '40%', opacity: 0 },
          animate: { left: 20, top: '50%', transform: 'translateY(-100%)', opacity: 1 },
          transition: baseTransition,
        }}
      >
        <Grid
          flexDirection="column"
          rowGap="20px"
          sx={{
            backgroundColor: 'rgba(168, 207, 238, 0.2)',
            padding: '5px',
            borderRadius: '10px',
          }}
        >
          <CustomPopover
            button={{
              element: (
                <Box
                  sx={{
                    width: '40px',
                    height: '40px',
                  }}
                  component="img"
                  src={ColorPickerImg}
                />
              ),
            }}
            popover={{
              element: (
                <SketchPicker
                  color={store.controllers.color}
                  disableAlpha
                  onChange={(color) => (state.controllers.color = color.hex)}
                />
              ),
              props: {
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                sx: {
                  marginLeft: '12px',
                },
              },
            }}
          />

          <CustomPopover
            button={{
              element: (
                <Box
                  sx={{
                    width: '40px',
                    height: '40px',
                  }}
                  component="img"
                  src={UploadFilePng}
                />
              ),
            }}
            popover={{
              element: (
                <div className={styles.filepond}>
                  <FilePond
                    acceptedFileTypes={['image/*']}
                    files={files.map((file) => file.file)}
                    onupdatefiles={setFiles}
                    allowMultiple={false}
                    maxFiles={1}
                    name="files"
                    labelIdle='Drag & Drop your iamge or <span class="filepond--label-action">Browse</span>'
                    credits={false}
                    imageEditor={{
                      // map legacy data objects to new imageState objects
                      legacyDataToImageState: legacyDataToImageState,

                      // used to create the editor, receives editor configuration, should return an editor instance
                      createEditor: openEditor,

                      // Required, used for reading the image data
                      imageReader: [
                        createDefaultImageReader,
                        {
                          /* optional image reader options here */
                        },
                      ],

                      // optionally. can leave out when not generating a preview thumbnail and/or output image
                      imageWriter: [
                        createDefaultImageWriter,
                        {
                          /* optional image writer options here */
                        },
                      ],

                      // used to generate poster images, runs an editor in the background
                      imageProcessor: processImage,

                      // editor options
                      editorOptions: {
                        utils: ['crop', 'finetune', 'filter', 'annotate'],
                        imageOrienter: createDefaultImageOrienter(),
                        shapePreprocessor: createDefaultShapePreprocessor(),
                        ...plugin_finetune_defaults,
                        ...plugin_filter_defaults,
                        ...markup_editor_defaults,
                        locale: {
                          ...locale_en_gb,
                          ...plugin_crop_locale_en_gb,
                          ...plugin_finetune_locale_en_gb,
                          ...plugin_filter_locale_en_gb,
                          ...plugin_annotate_locale_en_gb,
                          ...markup_editor_locale_en_gb,
                        },
                      },
                    }}
                  />
                </div>
              ),
              props: {
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                sx: {
                  marginLeft: '12px',
                },
              },
            }}
          />
        </Grid>
      </motion.div>
    </AnimatePresence>
  );
};
